import toast from "react-hot-toast";
import { addData, deleteById, retrieveData, addReply, retrieveReplies, ReplyType } from "../../services/firebase/services";
import CommentBox from "../components/commentBox";
import MainLayout from "../components/mainLayout";
import { useEffect, useState } from "react";
import useVisibility from "../../services/hooks/useVisibility";
import { motion } from "framer-motion";

type FirestoreTimestamp = { seconds: number; nanoseconds: number };

type CommentTypes = {
  id: string;
  name?: string;
  comment?: string;
  created_at?: FirestoreTimestamp;
  update_at?: FirestoreTimestamp;
  replies?: ReplyType[];
};

export default function Comment({ refComment, name }: { refComment: any; name?: string }) {
  const text1 = useVisibility();
  const input1 = useVisibility();
  const input2 = useVisibility();
  const btn1 = useVisibility();

  const [comments, setComments] = useState<CommentTypes[]>([]);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    getComments();
  }, []);

  const convertTimestampToDate = (timestamp: FirestoreTimestamp | null | undefined) => {
    if (!timestamp) return new Date(0);

    const seconds = timestamp.seconds || 0;
    const nanoseconds = timestamp.nanoseconds || 0;

    return new Date(seconds * 1000 + nanoseconds / 1_000_000);
  };

  const getComments = async () => {
    const mainComments: CommentTypes[] = await retrieveData("comments");

    const commentsWithReplies = await Promise.all(
      mainComments.map(async (comment) => {
        const replies = await retrieveReplies(comment.id);
        const sortedReplies = replies.sort((a: ReplyType, b: ReplyType) => {
          const dateA: Date = convertTimestampToDate(a.created_at);
          const dateB: Date = convertTimestampToDate(b.created_at);
          return dateA.getTime() - dateB.getTime();
        });
        return { ...comment, replies: sortedReplies };
      })
    );

    const sortedComments = commentsWithReplies.sort((a: CommentTypes, b: CommentTypes) => {
      const dateA: Date = convertTimestampToDate(a.created_at);
      const dateB: Date = convertTimestampToDate(b.created_at);
      return dateB.getTime() - dateA.getTime();
    });
    setComments(sortedComments);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    const formName = (target.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const commentText = commentInput;

    if (formName === "") {
      return toast.error("Gunakan nama dari link yang telah dikirim oleh admin");
    }

    if (formName !== name) {
      return toast.error("Gunakan link yang telah dikirim oleh admin");
    }

    if (commentText.trim() === "") {
      return toast.error("Tolong tuliskan ucapan dan doa restu Anda");
    }

    const userCommented = comments.some((existingComment) => existingComment.name === formName);

    if (userCommented && name !== "@rudinwila_admin") {
      return toast.error("Anda sudah memberikan ucapan dan doa restu");
    }

    try {
      await addData("comments", {
        name: formName,
        comment: commentText,
        created_at: new Date(),
        update_at: new Date(),
      });
      toast.success("Berhasil Di Kirim");
      setCommentInput("");
    } catch (error) {
      console.log(error);
      toast.error("Gagal Mengirim");
    } finally {
      getComments();
    }
  };

  const handleDeleteComment = async (id: string) => {
    try {
      await deleteById("comments", id);
      toast.success("Berhasil Di Hapus");
    } catch (error) {
      console.log(error);
      toast.error("Gagal Menghapus");
    } finally {
      getComments();
    }
  };

  const handleReplySubmit = async (commentId: string, replyName: string, replyText: string) => {
    if (replyText.trim() === "") {
      return toast.error("Balasan tidak boleh kosong!");
    }
    try {
      await addReply(commentId, {
        name: replyName,
        reply_text: replyText,
      });
      toast.success("Balasan berhasil dikirim!");
    } catch (error) {
      console.log(error);
      toast.error("Gagal mengirim balasan.");
    } finally {
      getComments();
    }
  };

  return (
    <MainLayout height="h-full" className="gap-5">
      <motion.h1 animate={text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }} ref={refComment} className="text-xl latin-20 text-center">
        Kirim Ucapan & Doa Restu
      </motion.h1>

      <form ref={text1.ref} onSubmit={handleFormSubmit} className="flex flex-col gap-4 w-full z-10 form-cream-maroon">
        <motion.input
          ref={input1.ref}
          animate={input1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          name="name"
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          defaultValue={name}
          disabled
          readOnly
          className="border-2 border-maroon-400 p-3 bg-cream-light capitalize rounded-xl font-medium text-maroon-700 cursor-not-allowed opacity-75"
        />

        <motion.textarea
          ref={input2.ref}
          animate={input2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          name="comment"
          placeholder="Tulis ucapan & doa restu untuk kedua mempelai..."
          disabled={name === "@rudinwila_admin"}
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          rows={4}
          className="border-2 border-maroon-400 p-3 bg-cream-light outline-none rounded-xl focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 resize-none transition-all duration-300"
        />

        <motion.button ref={btn1.ref} animate={btn1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }} type="submit" className="btn-maroon group relative overflow-hidden">
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Kirim Ucapan
          </span>
        </motion.button>
      </form>

      <div className="max-h-[180px] bg-cream/90 backdrop-blur-sm overflow-y-scroll comment-scrollbar z-10 w-full rounded-xl border-2 border-maroon-400 shadow-inner">
        {comments?.map((comment) => (
          <CommentBox
            key={comment.id}
            id={comment?.id || ""}
            name={comment?.name || ""}
            comment={comment?.comment || ""}
            date={comment?.update_at || comment?.created_at || { seconds: 0, nanoseconds: 0 }}
            admin={name === "@rudinwila_admin"}
            user={name === comment?.name}
            handleDeleteComment={handleDeleteComment}
            getComments={getComments}
            replies={comment?.replies || []}
            onReplySubmit={handleReplySubmit}
            currentUserName={name || ""}
          />
        ))}
      </div>
    </MainLayout>
  );
}
