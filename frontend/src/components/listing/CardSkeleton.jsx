import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../listing/cardSkeleton.css';

const CardSkeleton = () => {
  const skeletonCount = 8; // Number of skeleton cards to display

  return (
    <SkeletonTheme>
      <div className="skeleton-container">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <div key={index} className="skeleton-card">
            <Skeleton width={300} height={300} />
            <h3><Skeleton width={300} /></h3>
            <p><Skeleton width={150} /></p>
            <p><Skeleton width={150} /></p>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default CardSkeleton;
