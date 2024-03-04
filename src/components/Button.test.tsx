import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";
import { describe, expect, test, vi } from "vitest";

describe("Button Component", () => {
  test("renders with secondary color and text", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button type="secondary" btnText="button" onClick={onClickMock} />,
    );
    const buttonElement = getByText("button");
    expect(screen.getByText("button")).toBeDefined();
    // expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-green-500");
  });

  test("renders with primary color", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button type="primary" btnText="Click me" onClick={onClickMock} />,
    );
    const buttonElement = getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-blue-500");
  });

  test("renders with danger color", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button type="danger" btnText="button2" onClick={onClickMock} />,
    );
    const buttonElement = getByText("button2");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-red-500");
  });

  test("renders with default color", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button btnText="button2" onClick={onClickMock} />,
    );
    const buttonElement = getByText("button2");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-gray-500");
  });

  test("fires onClick event when clicked", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button type="primary" btnText="click me" onClick={onClickMock} />,
    );
    const buttonElement = getByText("click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});