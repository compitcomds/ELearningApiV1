import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
  };
}

export interface PluginEmailDesigner5EmailDesignerTemplate
  extends Struct.CollectionTypeSchema {
  collectionName: 'email-designer-templates';
  info: {
    singularName: 'email-designer-template';
    pluralName: 'email-designer-templates';
    displayName: 'Email Designer Templates';
    description: 'This collection stores email templates created with the email designer.';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    templateReferenceId: Schema.Attribute.Integer & Schema.Attribute.Unique;
    design: Schema.Attribute.JSON;
    name: Schema.Attribute.String;
    subject: Schema.Attribute.String;
    bodyHtml: Schema.Attribute.Text;
    bodyText: Schema.Attribute.Text;
    tags: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::email-designer-5.email-designer-template'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    user_course_histories: Schema.Attribute.Relation<
      'oneToMany',
      'api::user-course-history.user-course-history'
    >;
    user_course_purchaseds: Schema.Attribute.Relation<
      'oneToMany',
      'api::user-course-purchased.user-course-purchased'
    >;
    user_organisation: Schema.Attribute.Relation<
      'oneToOne',
      'api::user-organisation.user-organisation'
    >;
    verify_by_organisation: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiAssesmentHistoryAssesmentHistory
  extends Struct.CollectionTypeSchema {
  collectionName: 'assesment_histories';
  info: {
    singularName: 'assesment-history';
    pluralName: 'assesment-histories';
    displayName: 'Assesment_History';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course_module_test: Schema.Attribute.Relation<
      'oneToOne',
      'api::course-module-test.course-module-test'
    >;
    consumedTime: Schema.Attribute.Time;
    completed: Schema.Attribute.Boolean;
    totalMarks: Schema.Attribute.Decimal;
    obtainedMarks: Schema.Attribute.Decimal;
    user: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    one_time: Schema.Attribute.Boolean;
    course: Schema.Attribute.Relation<'oneToOne', 'api::course.course'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::assesment-history.assesment-history'
    >;
  };
}

export interface ApiCategorieCategorie extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    singularName: 'categorie';
    pluralName: 'categories';
    displayName: 'Categorie';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    courses: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
    description: Schema.Attribute.Text;
    category_banners: Schema.Attribute.Relation<
      'oneToMany',
      'api::web-media.web-media'
    >;
    category_thumbnails: Schema.Attribute.Relation<
      'oneToMany',
      'api::web-media.web-media'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::categorie.categorie'
    >;
  };
}

export interface ApiCourseCourse extends Struct.CollectionTypeSchema {
  collectionName: 'courses';
  info: {
    singularName: 'course';
    pluralName: 'courses';
    displayName: 'Course';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
    short_description: Schema.Attribute.Text;
    regular_price: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sale_price: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    language: Schema.Attribute.Enumeration<
      [
        'Hindi',
        'Bengali',
        'Marathi',
        'Gujarati',
        'Punjabi',
        'Assamese',
        'Odia',
        'Sindhi',
        'Urdu',
        'Kashmiri',
        'Konkani',
        'Tamil',
        'Telugu',
        'Kannada',
        'Malayalam',
        'Tulu',
        'Manipuri (Meitei)',
        'Bodo',
        'Mizo (Lushai)',
        'Lepcha',
        'Santali',
        'Mundari',
        'Ho',
        'Sanskrit',
        'Maithili',
        'Dogri',
        'Rajasthani',
        'Awadhi',
        'Bhojpuri',
        'Chhattisgarhi',
        'Magahi',
        'Garhwali',
        'Kumaoni',
        'Marwari',
        'Haryanvi',
        'Bhili',
        'Gondi',
        'Khasi',
        'Mizo',
        'Nagamese',
        'Limbu',
        'Sherpa',
        'Chinese (Mandarin, Cantonese, Wu, Hakka, Min)',
        'Japanese',
        'Korean',
        'Arabic',
        'Persian (Farsi, Dari, Tajik)',
        'Turkish',
        'Hebrew',
        'Thai',
        'Vietnamese',
        'Khmer',
        'Burmese',
        'Malay',
        'Indonesian',
        'Tagalog',
        'Swahili',
        'Amharic',
        'Zulu',
        'Yoruba',
        'Hausa',
        'Igbo',
        'Somali',
        'Shona',
        'Berber',
        'Afrikaans',
        'Tigrinya',
        'Quechua',
        'Guaran\u00ED',
        'Nahuatl',
        'Aymara',
        'Mapudungun',
        'Cree',
        'Inuit (Inuktitut)',
        'Maori',
        'Hawaiian',
        'Fijian',
        'Samoan',
        'Tongan',
        'English',
        'French',
        'Spanish',
        'German',
        'Italian',
        'Portuguese',
        'Russian',
        'Dutch',
        'Greek',
        'Polish',
        'Czech',
        'Slovak',
        'Hungarian',
        'Finnish',
        'Swedish',
        'Norwegian',
        'Danish',
        'Romanian',
        'Bulgarian',
        'Serbian',
        'Croatian',
        'Bosnian',
        'Slovenian',
        'Latvian',
        'Lithuanian',
        'Estonian',
        'Ukrainian',
        'Belarusian',
        'Georgian',
        'Armenian',
        'Albanian',
        'Macedonian',
      ]
    >;
    rank_tags: Schema.Attribute.Enumeration<
      ['Bestseller', 'Trending', 'Popular', 'Value for money']
    >;
    is_in_subscription: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    long_description: Schema.Attribute.Text;
    rating: Schema.Attribute.Decimal;
    number_of_student_enrolled: Schema.Attribute.Integer;
    course_instructures: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-instructure.course-instructure'
    >;
    course_includes: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-include.course-include'
    >;
    course_related_topics: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-related-topic.course-related-topic'
    >;
    course_reviews: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-review.course-review'
    >;
    course_what_you_learns: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-what-you-learn.course-what-you-learn'
    >;
    certificate_sample_text: Schema.Attribute.Text;
    course_discussion: Schema.Attribute.Relation<
      'oneToOne',
      'api::course-discussion.course-discussion'
    >;
    course_events: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-event.course-event'
    >;
    course_banner: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-media.web-media'
    >;
    course_thumbnail: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-media.web-media'
    >;
    certificate_sample: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-media.web-media'
    >;
    course_modules: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module.course-module'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::course.course'>;
  };
}

export interface ApiCourseContentCourseContent
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_contents';
  info: {
    singularName: 'course-content';
    pluralName: 'course-contents';
    displayName: 'Course_Content';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course_modules: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module.course-module'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-content.course-content'
    >;
  };
}

export interface ApiCourseDiscussionCourseDiscussion
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_discussions';
  info: {
    singularName: 'course-discussion';
    pluralName: 'course-discussions';
    displayName: 'Course_Discussion';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Schema.Attribute.String;
    course_discussion_questions: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-discussion-question.course-discussion-question'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-discussion.course-discussion'
    >;
  };
}

export interface ApiCourseDiscussionQuestionCourseDiscussionQuestion
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_discussion_questions';
  info: {
    singularName: 'course-discussion-question';
    pluralName: 'course-discussion-questions';
    displayName: 'Course_Discussion_Question';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    question: Schema.Attribute.Text;
    upvote: Schema.Attribute.Integer;
    course_discussion_question_answeres: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-discussion-question-answere.course-discussion-question-answere'
    >;
    questionImage: Schema.Attribute.Relation<
      'oneToOne',
      'api::web-media.web-media'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-discussion-question.course-discussion-question'
    >;
  };
}

export interface ApiCourseDiscussionQuestionAnswereCourseDiscussionQuestionAnswere
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_discussion_question_answeres';
  info: {
    singularName: 'course-discussion-question-answere';
    pluralName: 'course-discussion-question-answeres';
    displayName: 'Course_Discussion_Question_Answere';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    answere: Schema.Attribute.Text;
    answere_images: Schema.Attribute.Relation<
      'oneToMany',
      'api::web-media.web-media'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-discussion-question-answere.course-discussion-question-answere'
    >;
  };
}

export interface ApiCourseEventCourseEvent extends Struct.CollectionTypeSchema {
  collectionName: 'course_events';
  info: {
    singularName: 'course-event';
    pluralName: 'course-events';
    displayName: 'Course_Event ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    starts: Schema.Attribute.DateTime;
    ends: Schema.Attribute.DateTime;
    joiningLink: Schema.Attribute.String;
    password: Schema.Attribute.String;
    is_online: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    streetAddress: Schema.Attribute.String;
    cityOrTown: Schema.Attribute.String;
    State: Schema.Attribute.String;
    postalCode: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 100000;
          max: 999999;
        },
        number
      >;
    Country: Schema.Attribute.String;
    image: Schema.Attribute.Relation<'oneToMany', 'api::web-media.web-media'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-event.course-event'
    >;
  };
}

export interface ApiCourseIncludeCourseInclude
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_includes';
  info: {
    singularName: 'course-include';
    pluralName: 'course-includes';
    displayName: 'Course_Include';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    value: Schema.Attribute.String;
    lucide_icon: Schema.Attribute.Enumeration<
      [
        'Activity  ',
        'Airplay  ',
        'Alarm  ',
        'AlertCircle  ',
        'AlertOctagon  ',
        'AlertTriangle  ',
        'AlignCenter  ',
        'AlignJustify  ',
        'AlignLeft  ',
        'AlignRight  ',
        'Anchor  ',
        'Aperture  ',
        'Archive  ',
        'ArrowBigDown  ',
        'ArrowBigLeft  ',
        'ArrowBigRight  ',
        'ArrowBigUp  ',
        'ArrowDown  ',
        'ArrowLeft  ',
        'ArrowRight  ',
        'ArrowUp  ',
        'AtSign  ',
        'Award  ',
        'Axe  ',
        'Backpack  ',
        'Banana  ',
        'Banknote  ',
        'BarChart  ',
        'BarChart2  ',
        'Battery  ',
        'BatteryCharging  ',
        'BatteryFull  ',
        'BatteryLow  ',
        'BatteryMedium  ',
        'Beaker  ',
        'Bell  ',
        'BellOff  ',
        'Bike  ',
        'Binary  ',
        'Bitcoin  ',
        'Bluetooth  ',
        'Bold  ',
        'Book  ',
        'BookOpen  ',
        'Bookmark  ',
        'Box  ',
        'Briefcase  ',
        'Brush  ',
        'Bug  ',
        'Building  ',
        'Bus  ',
        'Calculator  ',
        'Calendar  ',
        'Camera  ',
        'CameraOff  ',
        'Car  ',
        'Carrot  ',
        'Cast  ',
        'Check  ',
        'CheckCircle  ',
        'CheckSquare  ',
        'ChevronDown  ',
        'ChevronLeft  ',
        'ChevronRight  ',
        'ChevronUp  ',
        'Circle  ',
        'CircleSlash  ',
        'Clipboard  ',
        'Clock  ',
        'Cloud  ',
        'CloudDrizzle  ',
        'CloudFog  ',
        'CloudHail  ',
        'CloudLightning  ',
        'CloudOff  ',
        'CloudRain  ',
        'CloudSnow  ',
        'CloudSun  ',
        'Code  ',
        'Codepen  ',
        'CodeSandbox  ',
        'Coffee  ',
        'Columns  ',
        'Command  ',
        'Compass  ',
        'Contrast  ',
        'Copy  ',
        'CornerDownLeft  ',
        'CornerDownRight  ',
        'CornerLeftDown  ',
        'CornerLeftUp  ',
        'CornerRightDown  ',
        'CornerRightUp  ',
        'CornerUpLeft  ',
        'CornerUpRight  ',
        'Cpu  ',
        'CreditCard  ',
        'Crop  ',
        'Crosshair  ',
        'Crown  ',
        'CurrencyDollar  ',
        'CurrencyEuro  ',
        'CurrencyPound  ',
        'CurrencyYen  ',
        'Database  ',
        'Delete  ',
        'Disc  ',
        'Divide  ',
        'DivideCircle  ',
        'DivideSquare  ',
        'DollarSign  ',
        'Download  ',
        'DownloadCloud  ',
        'Dribbble  ',
        'Droplet  ',
        'Droplets  ',
        'Edit  ',
        'Edit2  ',
        'Edit3  ',
        'Egg  ',
        'Equal  ',
        'EqualNot  ',
        'Eraser  ',
        'ExternalLink  ',
        'Eye  ',
        'EyeOff  ',
        'Facebook  ',
        'FastForward  ',
        'Feather  ',
        'Figma  ',
        'File  ',
        'FileCheck  ',
        'FileCode  ',
        'FileMinus  ',
        'FilePlus  ',
        'FileText  ',
        'FileX  ',
        'Film  ',
        'Filter  ',
        'Flag  ',
        'Flame  ',
        'Flashlight  ',
        'Flask  ',
        'FlipHorizontal  ',
        'FlipVertical  ',
        'Flower  ',
        'Folder  ',
        'FolderMinus  ',
        'FolderPlus  ',
        'Form  ',
        'Forward  ',
        'Frown  ',
        'Gamepad  ',
        'Gauge  ',
        'Gem  ',
        'Gift  ',
        'GitBranch  ',
        'GitCommit  ',
        'GitMerge  ',
        'GitPullRequest  ',
        'GitHub  ',
        'GitLab  ',
        'Globe  ',
        'Globe2  ',
        'Grab  ',
        'Grid  ',
        'GripHorizontal  ',
        'GripVertical  ',
        'Hammer  ',
        'Hand  ',
        'HardDrive  ',
        'Hash  ',
        'Headphones  ',
        'Heart  ',
        'HeartBroken  ',
        'HelpCircle  ',
        'Hexagon  ',
        'Highlighter  ',
        'History  ',
        'Home  ',
        'Hourglass  ',
        'IceCream  ',
        'Image  ',
        'Inbox  ',
        'Infinity  ',
        'Info  ',
        'Instagram  ',
        'Italic  ',
        'Joystick  ',
        'Key  ',
        'Keyboard  ',
        'Landmark  ',
        'Languages  ',
        'Laptop  ',
        'Layout  ',
        'Leaf  ',
        'LifeBuoy  ',
        'Lightbulb  ',
        'Link  ',
        'Link2  ',
        'LinkedIn  ',
        'List  ',
        'Loader  ',
        'Lock  ',
        'LogIn  ',
        'LogOut  ',
        'Mail  ',
        'MailOpen  ',
        'Map  ',
        'MapPin  ',
        'Maximize  ',
        'Maximize2  ',
        'Medal  ',
        'Megaphone  ',
        'Meh  ',
        'Menu  ',
        'MessageCircle  ',
        'MessageSquare  ',
        'Mic  ',
        'MicOff  ',
        'Minimize  ',
        'Minimize2  ',
        'Minus  ',
        'MinusCircle  ',
        'MinusSquare  ',
        'Monitor  ',
        'MonitorOff  ',
        'Moon  ',
        'MoreHorizontal  ',
        'MoreVertical  ',
        'Mountain  ',
        'MousePointer  ',
        'Move  ',
        'Music  ',
        'Navigation  ',
        'Navigation2  ',
        'Network  ',
        'Octagon  ',
        'Option  ',
        'Outdent  ',
        'Package  ',
        'Palette  ',
        'Paperclip  ',
        'Pause  ',
        'PauseCircle  ',
        'PenTool  ',
        'Pencil  ',
        'Percent  ',
        'Phone  ',
        'PhoneCall  ',
        'PhoneForwarded  ',
        'PhoneIncoming  ',
        'PhoneMissed  ',
        'PhoneOff  ',
        'PhoneOutgoing  ',
        'PictureInPicture  ',
        'PieChart  ',
        'Pin  ',
        'Play  ',
        'PlayCircle  ',
        'Plug  ',
        'Plus  ',
        'PlusCircle  ',
        'PlusSquare  ',
        'Pocket  ',
        'Power  ',
        'Printer  ',
        'Puzzle  ',
        'QrCode  ',
        'Quote  ',
        'Radio  ',
        'RadioButton  ',
        'Rewind  ',
        'Rocket  ',
        'RotateCcw  ',
        'RotateCw  ',
        'Rss  ',
        'Ruler  ',
        'Save  ',
        'Scale  ',
        'Scissors  ',
        'ScreenShare  ',
        'Search  ',
        'Send  ',
        'Server  ',
        'Settings  ',
        'Share  ',
        'Share2  ',
        'Shield  ',
        'ShieldOff  ',
        'ShoppingBag  ',
        'ShoppingCart  ',
        'Shovel  ',
        'Shrink  ',
        'Sidebar  ',
        'Signal  ',
        'SkipBack  ',
        'SkipForward  ',
        'Slack  ',
        'Slash  ',
        'Sliders  ',
        'Smartphone  ',
        'Smile  ',
        'Snowflake  ',
        'SortAscending  ',
        'SortDescending  ',
        'Speaker  ',
        'Sprout  ',
        'Square  ',
        'Star  ',
        'StopCircle  ',
        'Strikethrough  ',
        'Subscript  ',
        'Sun  ',
        'Sunrise  ',
        'Sunset  ',
        'Superscript  ',
        'SwissFranc  ',
        'SwitchCamera  ',
        'Table  ',
        'Tablet  ',
        'Tag  ',
        'Target  ',
        'Tent  ',
        'Terminal  ',
        'Thermometer  ',
        'ThumbsDown  ',
        'ThumbsUp  ',
        'Ticket  ',
        'Timer  ',
        'ToggleLeft  ',
        'ToggleRight  ',
        'Tool  ',
        'Trash  ',
        'Trash2  ',
        'Trello  ',
        'TrendingDown  ',
        'TrendingUp  ',
        'Triangle  ',
        'Trophy  ',
        'Truck  ',
        'Tv  ',
        'Twitch  ',
        'Twitter  ',
        'Type  ',
        'Umbrella  ',
        'Underline  ',
        'Undo  ',
        'Unlink  ',
        'Unlock  ',
        'Upload  ',
        'UploadCloud  ',
        'User  ',
        'UserCheck  ',
        'UserMinus  ',
        'UserPlus  ',
        'UserX  ',
        'Users  ',
        'Video  ',
        'VideoOff  ',
        'View  ',
        'Voicemail  ',
        'Volume  ',
        'Volume1  ',
        'Volume2  ',
        'VolumeX  ',
        'Wallet  ',
        'Watch  ',
        'Wifi  ',
        'WifiOff  ',
        'Wind  ',
        'Window  ',
        'Wrench  ',
        'X  ',
        'XCircle  ',
        'XSquare  ',
        'Youtube  ',
        'Zap  ',
        'ZapOff  ',
        'ZoomIn  ',
        'ZoomOut  ',
      ]
    >;
    sr_number: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-include.course-include'
    >;
  };
}

export interface ApiCourseInstructureCourseInstructure
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_instructures';
  info: {
    singularName: 'course-instructure';
    pluralName: 'course-instructures';
    displayName: 'Course_Instructure';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    description: Schema.Attribute.Text;
    linkedIn_link: Schema.Attribute.String;
    website_link: Schema.Attribute.String;
    web_medias: Schema.Attribute.Relation<
      'oneToMany',
      'api::web-media.web-media'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-instructure.course-instructure'
    >;
  };
}

export interface ApiCourseModuleCourseModule
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_modules';
  info: {
    singularName: 'course-module';
    pluralName: 'course-modules';
    displayName: 'Course_Module';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    sr_number: Schema.Attribute.Integer;
    course_module_texts: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-text.course-module-text'
    >;
    course_module_videos: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-video.course-module-video'
    >;
    course_module_tests: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-test.course-module-test'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module.course-module'
    >;
  };
}

export interface ApiCourseModuleTestCourseModuleTest
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_module_tests';
  info: {
    singularName: 'course-module-test';
    pluralName: 'course-module-tests';
    displayName: 'Course_Module_Test';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    marks: Schema.Attribute.Integer;
    one_time: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sr_number: Schema.Attribute.Integer;
    course_module_test_questions: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-test-question.course-module-test-question'
    >;
    duration: Schema.Attribute.Time &
      Schema.Attribute.DefaultTo<'00:15:00.000'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-test.course-module-test'
    >;
  };
}

export interface ApiCourseModuleTestQuestionCourseModuleTestQuestion
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_module_test_questions';
  info: {
    singularName: 'course-module-test-question';
    pluralName: 'course-module-test-questions';
    displayName: 'Course_Module_Test_Question';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    question: Schema.Attribute.Text;
    multi_select_option: Schema.Attribute.Boolean;
    marks: Schema.Attribute.Decimal;
    options: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-test-question-option.course-module-test-question-option'
    >;
    media_to_question: Schema.Attribute.Relation<
      'oneToMany',
      'api::web-media.web-media'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-test-question.course-module-test-question'
    >;
  };
}

export interface ApiCourseModuleTestQuestionOptionCourseModuleTestQuestionOption
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_module_test_question_options';
  info: {
    singularName: 'course-module-test-question-option';
    pluralName: 'course-module-test-question-options';
    displayName: 'Course_Module_Test_Question_Option';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    option_value: Schema.Attribute.Text;
    correct: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    media_in_option: Schema.Attribute.Relation<
      'oneToMany',
      'api::web-media.web-media'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-test-question-option.course-module-test-question-option'
    >;
  };
}

export interface ApiCourseModuleTextCourseModuleText
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_module_texts';
  info: {
    singularName: 'course-module-text';
    pluralName: 'course-module-texts';
    displayName: 'Course_Module_Text';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    course_module_text_value: Schema.Attribute.Text;
    course_module_text_resources: Schema.Attribute.Relation<
      'oneToMany',
      'api::web-media.web-media'
    >;
    sr_number: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<9999>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-text.course-module-text'
    >;
  };
}

export interface ApiCourseModuleVideoCourseModuleVideo
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_module_videos';
  info: {
    singularName: 'course-module-video';
    pluralName: 'course-module-videos';
    displayName: 'Course_Module_Video';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    iFrame: Schema.Attribute.Text;
    is_include_in_sample: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    sr_number: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<9999>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-video.course-module-video'
    >;
  };
}

export interface ApiCourseRelatedTopicCourseRelatedTopic
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_related_topics';
  info: {
    singularName: 'course-related-topic';
    pluralName: 'course-related-topics';
    displayName: 'Course_RelatedTopic';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Value: Schema.Attribute.Text;
    sr_number: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-related-topic.course-related-topic'
    >;
  };
}

export interface ApiCourseReviewCourseReview
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_reviews';
  info: {
    singularName: 'course-review';
    pluralName: 'course-reviews';
    displayName: 'Course_Review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    value: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
    user: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-review.course-review'
    >;
  };
}

export interface ApiCourseWhatYouLearnCourseWhatYouLearn
  extends Struct.CollectionTypeSchema {
  collectionName: 'course_what_you_learns';
  info: {
    singularName: 'course-what-you-learn';
    pluralName: 'course-what-you-learns';
    displayName: 'Course_WhatYouLearn';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    value: Schema.Attribute.Text;
    sr_number: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-what-you-learn.course-what-you-learn'
    >;
  };
}

export interface ApiResponseHistoryResponseHistory
  extends Struct.CollectionTypeSchema {
  collectionName: 'response_histories';
  info: {
    singularName: 'response-history';
    pluralName: 'response-histories';
    displayName: 'Response_History';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    questionId: Schema.Attribute.Relation<
      'oneToOne',
      'api::course-module-test-question.course-module-test-question'
    >;
    user: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    selectedOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::course-module-test-question-option.course-module-test-question-option'
    >;
    correctOption: Schema.Attribute.Relation<
      'oneToOne',
      'api::course-module-test-question-option.course-module-test-question-option'
    >;
    marks: Schema.Attribute.Decimal;
    assesment_history: Schema.Attribute.Relation<
      'oneToOne',
      'api::assesment-history.assesment-history'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::response-history.response-history'
    >;
  };
}

export interface ApiUserCourseHistoryUserCourseHistory
  extends Struct.CollectionTypeSchema {
  collectionName: 'user_course_histories';
  info: {
    singularName: 'user-course-history';
    pluralName: 'user-course-histories';
    displayName: 'User_CourseHistory';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course_module_tests: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-test.course-module-test'
    >;
    course_module_texts: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-text.course-module-text'
    >;
    course_module_videos: Schema.Attribute.Relation<
      'oneToMany',
      'api::course-module-video.course-module-video'
    >;
    is_completed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::user-course-history.user-course-history'
    >;
  };
}

export interface ApiUserCoursePurchasedUserCoursePurchased
  extends Struct.CollectionTypeSchema {
  collectionName: 'user_course_purchaseds';
  info: {
    singularName: 'user-course-purchased';
    pluralName: 'user-course-purchaseds';
    displayName: 'User_CoursePurchased';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    course: Schema.Attribute.Relation<'oneToOne', 'api::course.course'>;
    validUpto: Schema.Attribute.Date;
    result: Schema.Attribute.Enumeration<['Pass', 'Fail', 'Absent']>;
    user: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::user-course-purchased.user-course-purchased'
    >;
  };
}

export interface ApiUserOrganisationUserOrganisation
  extends Struct.CollectionTypeSchema {
  collectionName: 'user_organisations';
  info: {
    singularName: 'user-organisation';
    pluralName: 'user-organisations';
    displayName: 'User Organisation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::user-organisation.user-organisation'
    >;
  };
}

export interface ApiWebMediaWebMedia extends Struct.CollectionTypeSchema {
  collectionName: 'web_medias';
  info: {
    singularName: 'web-media';
    pluralName: 'web-medias';
    displayName: 'Web_Media';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    media_document_id: Schema.Attribute.String;
    media_original_name: Schema.Attribute.String;
    media_name: Schema.Attribute.String;
    isFolder: Schema.Attribute.Boolean;
    media_alt: Schema.Attribute.String;
    media_caption: Schema.Attribute.String;
    media_parent: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::web-media.web-media'
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'>;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'>;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'>;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::email-designer-5.email-designer-template': PluginEmailDesigner5EmailDesignerTemplate;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::assesment-history.assesment-history': ApiAssesmentHistoryAssesmentHistory;
      'api::categorie.categorie': ApiCategorieCategorie;
      'api::course.course': ApiCourseCourse;
      'api::course-content.course-content': ApiCourseContentCourseContent;
      'api::course-discussion.course-discussion': ApiCourseDiscussionCourseDiscussion;
      'api::course-discussion-question.course-discussion-question': ApiCourseDiscussionQuestionCourseDiscussionQuestion;
      'api::course-discussion-question-answere.course-discussion-question-answere': ApiCourseDiscussionQuestionAnswereCourseDiscussionQuestionAnswere;
      'api::course-event.course-event': ApiCourseEventCourseEvent;
      'api::course-include.course-include': ApiCourseIncludeCourseInclude;
      'api::course-instructure.course-instructure': ApiCourseInstructureCourseInstructure;
      'api::course-module.course-module': ApiCourseModuleCourseModule;
      'api::course-module-test.course-module-test': ApiCourseModuleTestCourseModuleTest;
      'api::course-module-test-question.course-module-test-question': ApiCourseModuleTestQuestionCourseModuleTestQuestion;
      'api::course-module-test-question-option.course-module-test-question-option': ApiCourseModuleTestQuestionOptionCourseModuleTestQuestionOption;
      'api::course-module-text.course-module-text': ApiCourseModuleTextCourseModuleText;
      'api::course-module-video.course-module-video': ApiCourseModuleVideoCourseModuleVideo;
      'api::course-related-topic.course-related-topic': ApiCourseRelatedTopicCourseRelatedTopic;
      'api::course-review.course-review': ApiCourseReviewCourseReview;
      'api::course-what-you-learn.course-what-you-learn': ApiCourseWhatYouLearnCourseWhatYouLearn;
      'api::response-history.response-history': ApiResponseHistoryResponseHistory;
      'api::user-course-history.user-course-history': ApiUserCourseHistoryUserCourseHistory;
      'api::user-course-purchased.user-course-purchased': ApiUserCoursePurchasedUserCoursePurchased;
      'api::user-organisation.user-organisation': ApiUserOrganisationUserOrganisation;
      'api::web-media.web-media': ApiWebMediaWebMedia;
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
