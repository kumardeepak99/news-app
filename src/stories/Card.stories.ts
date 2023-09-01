import { Meta, StoryObj } from "@storybook/react";
import Card, { CardTypes } from "../components/Card";

const meta: Meta = {
  component: Card,
  args: {
    title: "Card Title",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Review: Story = {
  args: {
    type: CardTypes.REVIEW,
    title: "Review Card Title",
    description: "This is a review card description.",
  },
};

export const Category: Story = {
  args: {
    type: CardTypes.CATEGORY,
    title: "Category Card Title",
  },
};
