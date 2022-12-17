import { Meta, StoryFn } from "@storybook/react";
import Button from "@/components/common/button/Button";
import Link from "next/link";

export default {
  /* NOTE: title prop은 스토리가 들어갈 경로를 말해줄 수 있어요. components/common/button 이라고 만들면, "/"로 구분된 트리구조에 보여져요.
   * 하지만 title prop을 비워 둘 경우 자동으로 폴더 경로를 인식하여 트리구조로 만들어 주기 때문에, 일관성을 위해 저는 비워두고 사용해요.
   * https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   */
  component: Button,
} as Meta<typeof Button>;

// NOTE: 한 stories.tsx 파일에서 여러개의 story를 만들기 위해 재사용 가능한 Template을 만들 수 있어요.
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

const handleClick = () => alert("clicked!");
export const Primary = Template.bind({});
Primary.args = {
  children: "Primary 버튼",
  onClick: handleClick,
};
Primary.storyName = "Primary 버튼";

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary 버튼",
  onClick: handleClick,
  variant: "secondary",
};
Secondary.storyName = "Secondary 버튼";

export const LinkButton = Template.bind({});
LinkButton.decorators = [
  (Story) => (
    <Link href="/webpart">
      <Story />
    </Link>
  ),
];
LinkButton.args = {
  children: "Link 버튼",
  onClick: handleClick,
};
