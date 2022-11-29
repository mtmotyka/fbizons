import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        color: "#0E171B"
    }

    #root {
        margin: 0 auto;
    }
 `;
