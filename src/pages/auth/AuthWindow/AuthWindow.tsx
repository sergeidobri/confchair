import React from "react";
import styles from "./AuthWindow.module.css";

interface AuthWindowProps {
  heading: string;
  description: string;
  children: React.ReactNode;
  additionalInfo?: React.ReactNode;
}

export const AuthWindow = ({
  heading,
  description,
  children,
  additionalInfo,
}: AuthWindowProps) => {
  return (
    <div className="window">
      <h1 className={styles.heading}>{heading}</h1>
      <h2 className={styles.description}>{description}</h2>
      {children}
      {additionalInfo && (
        <div className={styles.additionalInfo}>{additionalInfo}</div>
      )}
    </div>
  );
};
