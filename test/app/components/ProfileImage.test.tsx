import { render, screen } from "@testing-library/react";
import ProfileImage from "@/app/components/ProfileImage";

describe("ProfileImage component", () => {
    test("renders profile image with correct props", () => {
      const id = 123;
      render(<ProfileImage id={id} />);
      
      const profileImg = screen.getByAltText("Profilbild") as HTMLImageElement;
      const src = profileImg.getAttribute("src");
      expect(src).toMatch(`http://localhost/_next/image?url=https%3A%2F%2Fimage.facethefacts-api.de%2F${id}.jpg&w=384&q=75`);
      expect(profileImg.getAttribute("width")).toBe("146");
      expect(profileImg.getAttribute("height")).toBe("146");
    });
  });