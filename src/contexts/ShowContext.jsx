import { useState, useRef, useEffect } from 'react';
import { ShowContext } from './ShowContextDefinition';

export const ShowProvider = ({ children, data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isShowPreviewOpen, setIsShowPreviewOpen] = useState(false);
    const [isRightEdge, setIsRightEdge] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const checkPosition = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        // If card is in the rightmost 25% of the screen, consider it at right edge
        setIsRightEdge(rect.right > windowWidth * 0.75);
      }
    };

    checkPosition();
    window.addEventListener('resize', checkPosition);
    return () => window.removeEventListener('resize', checkPosition);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isShowPreviewOpen) {
      setIsHovered(false);
    }
  };

  const openShowPreview = () => {
    setIsShowPreviewOpen(true);
  };

  const closeShowPreview = () => {
    setIsShowPreviewOpen(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleVideoLoadStart = () => {
    setVideoError(false);
  };

  const value = {
    // Data
    data,

    // States
    isHovered,
    isRightEdge,
    isShowPreviewOpen,
    videoError,
    cardRef,

    // Actions
    handleMouseEnter,
    handleMouseLeave,
    openShowPreview,
    closeShowPreview,
    handleVideoError,
    handleVideoLoadStart,

    // Computed values
    positionClass: isRightEdge ? "right-0" : "left-0"
  };

  return (
    <ShowContext.Provider value={value}>
      {children}
    </ShowContext.Provider>
  );
};