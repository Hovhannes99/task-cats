import { ComponentProps, FC } from "react";

type ButtonProps = ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({ className, children, ...restProps }) => (
    <button className={className} {...restProps}>
        {children}
    </button>
);
