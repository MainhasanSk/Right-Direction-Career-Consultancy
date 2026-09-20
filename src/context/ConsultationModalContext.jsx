import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ConsultationModalContext = createContext({
  isOpen: false,
  modalData: {},
  openConsultationModal: () => {},
  closeConsultationModal: () => {},
});

export function ConsultationModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    defaultCategory: "SARATHI",
    note: "",
  });

  const location = useLocation();

  const openConsultationModal = (initialData = {}) => {
    setModalData((prev) => ({
      ...prev,
      ...initialData,
    }));
    setIsOpen(true);
  };

  const closeConsultationModal = () => {
    setIsOpen(false);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeConsultationModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent background body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Open modal automatically if URL has #book-consultation or ?book=consultation
  useEffect(() => {
    if (location.hash === "#book-consultation" || location.search.includes("book=consultation")) {
      setIsOpen(true);
    }
  }, [location]);

  return (
    <ConsultationModalContext.Provider
      value={{
        isOpen,
        modalData,
        openConsultationModal,
        closeConsultationModal,
      }}
    >
      {children}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  const context = useContext(ConsultationModalContext);
  if (!context) {
    throw new Error("useConsultationModal must be used within a ConsultationModalProvider");
  }
  return context;
}
