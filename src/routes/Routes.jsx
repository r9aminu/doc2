import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { PrivacyPolicyPage } from "../pages/privacy-policy";
import { TermsConditionsPage } from "../pages/terms-conditions";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
