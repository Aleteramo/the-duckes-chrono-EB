// src/types/watch.ts
export interface WatchSpecs {
    ref: string;
    size: string;
    sku: string;
    movement: string;
    model: string;
    gender: string;
  }
  
  export interface WatchDetails {
    name: string;
    brand: string;
    status: string;
    images: string[];
    description: {
      it: string;
      en: string;
    };
    specs: WatchSpecs;
  }