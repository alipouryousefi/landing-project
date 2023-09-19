import { UseFormRegister } from "react-hook-form";

export enum selectedTabTypes {
  Join = 0,
  Leaderboard = 10,
  YourFriends = 20,
}

export interface InviteFormTypes {
  email: string;
  invitedEmail: string;
}

export interface CustomInputProps {
  label: string;
  imageSrc: string;
  name: string;
}
