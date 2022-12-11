import { Meta } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
} as Meta;

export const Default = () => <Button />;
Default.storyName = "기본";
