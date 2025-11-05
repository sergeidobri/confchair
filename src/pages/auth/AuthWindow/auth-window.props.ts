import React from "react";

export interface AuthWindowProps {
  heading: string;
  description: string;
  children: React.ReactNode;
  additionalInfo?: React.ReactNode;
}