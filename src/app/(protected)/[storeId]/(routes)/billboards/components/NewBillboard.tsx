"use client";

import MainButton, {
  ButtonSizeType,
  ButtonType,
  ButtonVariantType,
} from "@/components/button/MainButton";
import { useParams, useRouter } from "next/navigation";

const NewBillboard = () => {
  const router = useRouter();
  const parmas = useParams();
  return (
    <MainButton
      size={ButtonSizeType.Medium}
      variant={ButtonVariantType.Contained}
      text="+ Create New Billboard"
      type={ButtonType.Submit}
      onClick={() => {
        router.push(`/${parmas.storeId}/billboards/new`);
      }}
    />
  );
};

export default NewBillboard;
