import { BaseIcon } from "./BaseIcon";
import type { IconProps } from "./icon.types";

interface IcCalendarProps extends IconProps {
  variant?: "default" | "line";
}

export const IcCalendar = ({
  variant = "default",
  ...props
}: IcCalendarProps): React.ReactElement => {
  if (variant === "line") {
    return (
      <BaseIcon viewBox="0 0 24 24" fill="none" {...props}>
        <path
          d="M17.6471 5.45312H6.35294C5.05345 5.45312 4 6.53849 4 7.87736V17.5743C4 18.9132 5.05345 19.9985 6.35294 19.9985H17.6471C18.9466 19.9985 20 18.9132 20 17.5743V7.87736C20 6.53849 18.9466 5.45312 17.6471 5.45312Z"
          stroke="currentColor"
        />
        <path d="M4 9.81836H20" stroke="currentColor" />
        <path
          d="M8.32715 4V6.90908M15.8566 4V6.90908"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </BaseIcon>
    );
  }

  return (
    <BaseIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20 17.5762C19.9998 18.9148 18.9458 20 17.6465 20H6.35254C5.05338 19.9998 4.00023 18.9147 4 17.5762V10.3184H20V17.5762ZM17.6465 5.45508C18.9458 5.45508 19.9998 6.54025 20 7.87891V9.31836H4V7.87891C4.00017 6.54037 5.05334 5.45527 6.35254 5.45508H17.6465Z"
        fill="currentColor"
      />
      <path d="M8.32668 4V6.90895M15.8559 4V6.90895" stroke="currentColor" strokeLinecap="round" />
    </BaseIcon>
  );
};
