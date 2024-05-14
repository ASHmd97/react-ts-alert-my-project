import {
  Ban,
  BellDot,
  CircleAlert,
  CircleCheckBig,
  TriangleAlert,
  X,
} from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";

interface IProps {
  type: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type = "danger", title, description, children }: IProps) => {
  let icon;
  if (type === "error") {
    icon = <Ban size={20} />;
  } else if (type === "default") {
    icon = <BellDot size={20} />;
  } else if (type === "info") {
    icon = <CircleAlert size={20} />;
  } else if (type === "warning") {
    icon = <TriangleAlert size={20} />;
  } else if (type === "success") {
    icon = <CircleCheckBig size={20} />;
  }
  return (
    <div className={type}>
      <div className="header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className="close" size={20} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
