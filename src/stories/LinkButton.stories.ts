import { Meta, StoryObj } from "@storybook/react";
import LinkButton, { LinkTypes } from "../components/LinkButton";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailLinkButton: Story = {
  args: {
    label: "Contact via Email",
    linkType: LinkTypes.EMAIL,
    link: "example@example.com",
  },
};

export const ExternalLinkButton: Story = {
  args: {
    label: "Visit Youtube Site",
    linkType: LinkTypes.EXTERNAL,
    link: "www.youtube.com",
  },
};
