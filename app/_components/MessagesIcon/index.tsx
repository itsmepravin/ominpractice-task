import Image from "next/image";
import messagesSVG from "../../_assets/img/messages.svg";

type TMessagesIcon = {
  currentlyActive: boolean;
};

const MessagesIcon = ({ currentlyActive }: TMessagesIcon) => {
  return <Image src={messagesSVG} alt="Messages Icon" width={24} />;
};

export default MessagesIcon;
