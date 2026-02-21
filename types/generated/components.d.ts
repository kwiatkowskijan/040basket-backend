import type { Schema, Struct } from '@strapi/strapi';

export interface SeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_metas';
  info: {
    displayName: 'Meta';
    icon: 'alien';
  };
  attributes: {
    metaDecription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.meta': SeoMeta;
    }
  }
}
