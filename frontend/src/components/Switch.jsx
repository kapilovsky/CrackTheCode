import React from "react";
import styled from "styled-components";
import { useThemeStore } from "../store/useThemeStore";

const Switch = () => {
  const { theme, setTheme } = useThemeStore();
  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <StyledWrapper>
      <label className="switch">
        <input
          className="toggle"
          onChange={handleThemeChange}
          checked={theme === "light"}
          id="checkbox"
          type="checkbox"
        />
        <span className="slider" />
        <span className="card-side" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    --input-focus: #dc2626;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: #323232;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 50px;
    height: 20px;
  }

  .toggle {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-colorcolor);
    transition: 0.3s;
  }

  .slider:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: var(--bg-color);
    box-shadow: 0 3px 0 var(--main-color);
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
  }

  .toggle:checked + .slider:before {
    transform: translateX(30px);
  }
  @media (max-width: 768px) {
    .switch {
      width: 40px;
      height: 16px;
      gap: 20px;
    }

    .slider:before {
      height: 16px;
      width: 16px;
      bottom: 0px;
    }

    .toggle:checked + .slider:before {
      transform: translateX(24px);
    }
  }
`;

export default Switch;
