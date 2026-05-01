import { redirect } from "next/navigation";

const SentencePage = (): never => {
  redirect("/diary/emotion");
};

export default SentencePage;
