import type { Meta, StoryObj } from "@storybook/react";
import { ChevronRight, Info, MoreVertical } from "lucide-react";

import { Button } from "../components";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonWrapper = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-2">
    <div>{label}</div>
    {children}
  </div>
);

// These are the stories
export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex gap-6">
      <ButtonWrapper label="Default">
        <Button>Click Me</Button>
      </ButtonWrapper>

      <ButtonWrapper label="Secondary">
        <Button variant="secondary">Click Me</Button>
      </ButtonWrapper>

      <ButtonWrapper label="Destructive">
        <Button variant="destructive">Click Me</Button>
      </ButtonWrapper>

      <ButtonWrapper label="Outline">
        <Button variant="outline">Click Me</Button>
      </ButtonWrapper>

      <ButtonWrapper label="Ghost">
        <Button variant="ghost">Click Me</Button>
      </ButtonWrapper>
    </div>
  ),
};

export const AllSizes = {
  name: "All Sizes",
  render: () => (
    <div className="flex gap-6">
      <ButtonWrapper label="Icon">
        <Button variant="secondary" size="icon">
          <MoreVertical />
        </Button>
      </ButtonWrapper>

      <ButtonWrapper label="Small">
        <Button size="sm">Click Me</Button>
      </ButtonWrapper>

      <ButtonWrapper label="Default">
        <Button>Click Me</Button>
      </ButtonWrapper>

      <ButtonWrapper label="Large">
        <Button size="lg">Click Me</Button>
      </ButtonWrapper>
    </div>
  ),
};

export const Playground: Story = {
  name: "Playground",
  argTypes: {
    startIcon: { control: false },
    endIcon: { control: false },
    variant: { options: ["default", "secondary", "outline", "destructive", "ghost"], control: "radio" },
    size: { options: ["default", "sm", "lg", "icon"], control: "radio" },
  },
  render: (args) => {
    return (
      <div className="flex items-center gap-5">
        {args.size === "icon" ? (
          <Button {...args} startIcon={args.size === "icon" ? null : <Info />}>
            {args.size === "icon" ? <MoreVertical /> : "Click Me"}
          </Button>
        ) : (
          <>
            <ButtonWrapper label="A button with start icon">
              <Button {...args} startIcon={<Info />}>
                Click Me
              </Button>
            </ButtonWrapper>

            <ButtonWrapper label="A button with end icon">
              <Button {...args} endIcon={<ChevronRight />}>
                Click Me
              </Button>
            </ButtonWrapper>
          </>
        )}
      </div>
    );
  },
};
