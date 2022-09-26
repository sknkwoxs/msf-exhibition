import React from "react";
import { createRoot } from 'react-dom/client';
import Routes from "./Router"; //-> Routes 컴포넌트 연결
import "./index.css";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const root = createRoot(document.getElementById('root'));
root.render(<Routes />);
