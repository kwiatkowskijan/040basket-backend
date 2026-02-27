import type { Schema, Struct } from '@strapi/strapi';

export interface EventsMatchDetails extends Struct.ComponentSchema {
  collectionName: 'components_events_match_details';
  info: {
    displayName: 'MatchDetails';
  };
  attributes: {
    opponent: Schema.Attribute.String;
  };
}

export interface EventsTournamentDetails extends Struct.ComponentSchema {
  collectionName: 'components_events_tournament_details';
  info: {
    displayName: 'TournamentDetails';
  };
  attributes: {
    registrationLink: Schema.Attribute.String;
  };
}

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
      'events.match-details': EventsMatchDetails;
      'events.tournament-details': EventsTournamentDetails;
      'seo.meta': SeoMeta;
    }
  }
}
