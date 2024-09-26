import GButton from "./GButton";
import { render, screen } from "@testing-library/react";


test("GButton component should render", () => {
    render(<GButton label="Click Me" />)
    const button = screen.getByText("Click Me")
    expect(button).toBeInTheDocument()
})



//Test şunları yapacak
// 1- Bileşeni render edecek
// 2- Butonun rengi yeşil mi veya "Click Me" yazısı var mı kontrol edecek