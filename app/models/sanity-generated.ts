import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Animal
 *
 *
 */
export interface Animal extends SanityDocument {
  _type: "animal";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Age — `number`
   *
   *
   */
  age?: number;
}

/**
 * Book
 *
 *
 */
export interface Book extends SanityDocument {
  _type: "book";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Author — `string`
   *
   *
   */
  author?: string;

  /**
   * Rating — `number`
   *
   *
   */
  rating?: number;
}

export type Documents = Animal | Book;
