export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type Banner = {
  __typename?: 'Banner';
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updateAt: Scalars['DateTime'];
};

export type BannerCountAggregate = {
  __typename?: 'BannerCountAggregate';
  _all: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  link: Scalars['Int'];
  title: Scalars['Int'];
  updateAt: Scalars['Int'];
};

export type BannerCreateInput = {
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['Upload'];
  link?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type BannerMaxAggregate = {
  __typename?: 'BannerMaxAggregate';
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type BannerMinAggregate = {
  __typename?: 'BannerMinAggregate';
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type Category = {
  __typename?: 'Category';
  Post?: Maybe<Array<Post>>;
  _count: CategoryCount;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  Post: Scalars['Int'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type CategoryCreateInput = {
  Post?: InputMaybe<PostCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CategoryCreateNestedOneWithoutPostInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutPostInput>;
  create?: InputMaybe<CategoryCreateWithoutPostInput>;
};

export type CategoryCreateOrConnectWithoutPostInput = {
  create: CategoryCreateWithoutPostInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutPostInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Configuration = {
  __typename?: 'Configuration';
  id: Scalars['ID'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigurationCountAggregate = {
  __typename?: 'ConfigurationCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  value: Scalars['Int'];
};

export type ConfigurationCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigurationMaxAggregate = {
  __typename?: 'ConfigurationMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ConfigurationMinAggregate = {
  __typename?: 'ConfigurationMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Download = {
  __typename?: 'Download';
  author: User;
  counting: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  downloadCategory: DownloadCategory;
  downloadCategoryId: Scalars['String'];
  id: Scalars['ID'];
  link: Scalars['String'];
  thumbnail: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type DownloadAvgAggregate = {
  __typename?: 'DownloadAvgAggregate';
  counting?: Maybe<Scalars['Float']>;
};

export type DownloadCategory = {
  __typename?: 'DownloadCategory';
  Download?: Maybe<Array<Download>>;
  _count: DownloadCategoryCount;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DownloadCategoryCount = {
  __typename?: 'DownloadCategoryCount';
  Download: Scalars['Int'];
};

export type DownloadCategoryCountAggregate = {
  __typename?: 'DownloadCategoryCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type DownloadCategoryCreateInput = {
  Download?: InputMaybe<DownloadCreateNestedManyWithoutDownloadCategoryInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DownloadCategoryCreateNestedOneWithoutDownloadInput = {
  connect?: InputMaybe<DownloadCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DownloadCategoryCreateOrConnectWithoutDownloadInput>;
  create?: InputMaybe<DownloadCategoryCreateWithoutDownloadInput>;
};

export type DownloadCategoryCreateOrConnectWithoutDownloadInput = {
  create: DownloadCategoryCreateWithoutDownloadInput;
  where: DownloadCategoryWhereUniqueInput;
};

export type DownloadCategoryCreateWithoutDownloadInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type DownloadCategoryMaxAggregate = {
  __typename?: 'DownloadCategoryMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DownloadCategoryMinAggregate = {
  __typename?: 'DownloadCategoryMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DownloadCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DownloadCountAggregate = {
  __typename?: 'DownloadCountAggregate';
  _all: Scalars['Int'];
  counting: Scalars['Int'];
  createdAt: Scalars['Int'];
  downloadCategoryId: Scalars['Int'];
  id: Scalars['Int'];
  link: Scalars['Int'];
  thumbnail: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type DownloadCreateManyAuthorInput = {
  counting?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloadCategoryId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  thumbnail?: InputMaybe<Scalars['Upload']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DownloadCreateManyAuthorInputEnvelope = {
  data: Array<DownloadCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DownloadCreateManyDownloadCategoryInput = {
  counting?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  thumbnail?: InputMaybe<Scalars['Upload']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type DownloadCreateManyDownloadCategoryInputEnvelope = {
  data: Array<DownloadCreateManyDownloadCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DownloadCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<DownloadWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DownloadCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<DownloadCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<DownloadCreateManyAuthorInputEnvelope>;
};

export type DownloadCreateNestedManyWithoutDownloadCategoryInput = {
  connect?: InputMaybe<Array<DownloadWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DownloadCreateOrConnectWithoutDownloadCategoryInput>>;
  create?: InputMaybe<Array<DownloadCreateWithoutDownloadCategoryInput>>;
  createMany?: InputMaybe<DownloadCreateManyDownloadCategoryInputEnvelope>;
};

export type DownloadCreateOrConnectWithoutAuthorInput = {
  create: DownloadCreateWithoutAuthorInput;
  where: DownloadWhereUniqueInput;
};

export type DownloadCreateOrConnectWithoutDownloadCategoryInput = {
  create: DownloadCreateWithoutDownloadCategoryInput;
  where: DownloadWhereUniqueInput;
};

export type DownloadCreateWithoutAuthorInput = {
  counting?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloadCategory: DownloadCategoryCreateNestedOneWithoutDownloadInput;
  id?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  thumbnail?: InputMaybe<Scalars['Upload']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DownloadCreateWithoutDownloadCategoryInput = {
  author: UserCreateNestedOneWithoutDownloadInput;
  counting?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  thumbnail?: InputMaybe<Scalars['Upload']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DownloadMaxAggregate = {
  __typename?: 'DownloadMaxAggregate';
  counting?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downloadCategoryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type DownloadMinAggregate = {
  __typename?: 'DownloadMinAggregate';
  counting?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downloadCategoryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type DownloadSumAggregate = {
  __typename?: 'DownloadSumAggregate';
  counting?: Maybe<Scalars['Int']>;
};

export type DownloadUncheckedCreateInput = {
  counting?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  downloadCategoryId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  thumbnail?: InputMaybe<Scalars['Upload']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type DownloadUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<DownloadWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DownloadCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<DownloadCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<DownloadCreateManyAuthorInputEnvelope>;
};

export type DownloadWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBanner: Banner;
  createCategory: Category;
  createConfig: Configuration;
  createDownload: Download;
  createDownloadCategory: DownloadCategory;
  createPage: Page;
  createPost: Post;
  createUser: User;
  deleteBanner: Scalars['Boolean'];
  deleteCategory: Scalars['Boolean'];
  deleteConfig: Scalars['Boolean'];
  deleteDownload: Scalars['Boolean'];
  deleteDownloadCategory: Scalars['Boolean'];
  deletePage: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  deleteUser: Scalars['String'];
  login: Scalars['String'];
  register: Scalars['String'];
  updateBanner: Banner;
  updateCategory: Category;
  updateConfig: Configuration;
  updateDownload: Download;
  updateDownloadCategory: DownloadCategory;
  updatePage: Page;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreateBannerArgs = {
  input: BannerCreateInput;
};


export type MutationCreateCategoryArgs = {
  input: CategoryCreateInput;
};


export type MutationCreateConfigArgs = {
  input: ConfigurationCreateInput;
};


export type MutationCreateDownloadArgs = {
  input: DownloadUncheckedCreateInput;
};


export type MutationCreateDownloadCategoryArgs = {
  input: DownloadCategoryCreateInput;
};


export type MutationCreatePageArgs = {
  input: PageUncheckedCreateInput;
};


export type MutationCreatePostArgs = {
  input: PostUncheckedCreateInput;
};


export type MutationCreateUserArgs = {
  input: UserUncheckedCreateInput;
};


export type MutationDeleteBannerArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String'];
};


export type MutationDeleteConfigArgs = {
  id: Scalars['String'];
};


export type MutationDeleteDownloadArgs = {
  id: Scalars['String'];
};


export type MutationDeleteDownloadCategoryArgs = {
  id: Scalars['String'];
};


export type MutationDeletePageArgs = {
  id: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  input: InputLogin;
};


export type MutationRegisterArgs = {
  input: InputRegister;
};


export type MutationUpdateBannerArgs = {
  input: BannerCreateInput;
};


export type MutationUpdateCategoryArgs = {
  input: CategoryCreateInput;
};


export type MutationUpdateConfigArgs = {
  input: ConfigurationCreateInput;
};


export type MutationUpdateDownloadArgs = {
  input: DownloadUncheckedCreateInput;
};


export type MutationUpdateDownloadCategoryArgs = {
  input: DownloadCategoryCreateInput;
};


export type MutationUpdatePageArgs = {
  input: PageUncheckedCreateInput;
};


export type MutationUpdatePostArgs = {
  input: PostUncheckedCreateInput;
};


export type MutationUpdateUserArgs = {
  input: UserUncheckedCreateInput;
};

export type Page = {
  __typename?: 'Page';
  author: User;
  content: Scalars['String'];
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updateAt: Scalars['DateTime'];
  userId: Scalars['String'];
  view: Scalars['Int'];
};

export type PageAvgAggregate = {
  __typename?: 'PageAvgAggregate';
  view?: Maybe<Scalars['Float']>;
};

export type PageCountAggregate = {
  __typename?: 'PageCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  thumbnail: Scalars['Int'];
  title: Scalars['Int'];
  updateAt: Scalars['Int'];
  userId: Scalars['Int'];
  view: Scalars['Int'];
};

export type PageCreateManyAuthorInput = {
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  view?: InputMaybe<Scalars['Int']>;
};

export type PageCreateManyAuthorInputEnvelope = {
  data: Array<PageCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PageCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PageCreateManyAuthorInputEnvelope>;
};

export type PageCreateOrConnectWithoutAuthorInput = {
  create: PageCreateWithoutAuthorInput;
  where: PageWhereUniqueInput;
};

export type PageCreateWithoutAuthorInput = {
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  view?: InputMaybe<Scalars['Int']>;
};

export type PageMaxAggregate = {
  __typename?: 'PageMaxAggregate';
  content?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  view?: Maybe<Scalars['Int']>;
};

export type PageMinAggregate = {
  __typename?: 'PageMinAggregate';
  content?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  view?: Maybe<Scalars['Int']>;
};

export type PageSumAggregate = {
  __typename?: 'PageSumAggregate';
  view?: Maybe<Scalars['Int']>;
};

export type PageUncheckedCreateInput = {
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  view?: InputMaybe<Scalars['Int']>;
};

export type PageUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PageCreateManyAuthorInputEnvelope>;
};

export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  category: Category;
  categoryId: Scalars['String'];
  content: Scalars['String'];
  createAt: Scalars['DateTime'];
  id: Scalars['ID'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updateAt: Scalars['DateTime'];
  userId: Scalars['String'];
  view: Scalars['Int'];
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  view?: Maybe<Scalars['Float']>;
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int'];
  categoryId: Scalars['Int'];
  content: Scalars['Int'];
  createAt: Scalars['Int'];
  id: Scalars['Int'];
  thumbnail: Scalars['Int'];
  title: Scalars['Int'];
  updateAt: Scalars['Int'];
  userId: Scalars['Int'];
  view: Scalars['Int'];
};

export type PostCreateManyAuthorInput = {
  categoryId: Scalars['String'];
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  view?: InputMaybe<Scalars['Int']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PostCreateManyCategoryInput = {
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  view?: InputMaybe<Scalars['Int']>;
};

export type PostCreateManyCategoryInputEnvelope = {
  data: Array<PostCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<PostCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<PostCreateManyCategoryInputEnvelope>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCategoryInput = {
  create: PostCreateWithoutCategoryInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  category: CategoryCreateNestedOneWithoutPostInput;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  view?: InputMaybe<Scalars['Int']>;
};

export type PostCreateWithoutCategoryInput = {
  author: UserCreateNestedOneWithoutPostInput;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  view?: InputMaybe<Scalars['Int']>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  categoryId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  view?: Maybe<Scalars['Int']>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  categoryId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updateAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  view?: Maybe<Scalars['Int']>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  view?: Maybe<Scalars['Int']>;
};

export type PostUncheckedCreateInput = {
  categoryId: Scalars['String'];
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  view?: InputMaybe<Scalars['Int']>;
};

export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  banner: Banner;
  banners: Banner;
  categories: Array<Category>;
  category: Category;
  configuration: Configuration;
  configurations: Configuration;
  download: Download;
  downloadCategories: DownloadCategory;
  downloadCategory: DownloadCategory;
  downloads: Array<Download>;
  page: Page;
  pages: Array<Page>;
  post: Post;
  posts: Array<Post>;
  user: User;
  users: Array<User>;
};


export type QueryBannerArgs = {
  id: Scalars['String'];
};


export type QueryCategoryArgs = {
  id: Scalars['String'];
};


export type QueryConfigurationArgs = {
  id: Scalars['String'];
};


export type QueryDownloadArgs = {
  id: Scalars['String'];
};


export type QueryDownloadCategoryArgs = {
  id: Scalars['String'];
};


export type QueryPageArgs = {
  id: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  Download?: Maybe<Array<Download>>;
  Page?: Maybe<Array<Page>>;
  Post?: Maybe<Array<Post>>;
  _count: UserCount;
  avatar: Scalars['String'];
  createAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  updateAt: Scalars['DateTime'];
};

export type UserCount = {
  __typename?: 'UserCount';
  Download: Scalars['Int'];
  Page: Scalars['Int'];
  Post: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  avatar: Scalars['Int'];
  createAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  updateAt: Scalars['Int'];
};

export type UserCreateNestedOneWithoutDownloadInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDownloadInput>;
  create?: InputMaybe<UserCreateWithoutDownloadInput>;
};

export type UserCreateNestedOneWithoutPostInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostInput>;
  create?: InputMaybe<UserCreateWithoutPostInput>;
};

export type UserCreateOrConnectWithoutDownloadInput = {
  create: UserCreateWithoutDownloadInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostInput = {
  create: UserCreateWithoutPostInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutDownloadInput = {
  Page?: InputMaybe<PageCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['Upload']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutPostInput = {
  Download?: InputMaybe<DownloadCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['Upload']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatar?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatar?: Maybe<Scalars['String']>;
  createAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updateAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateInput = {
  Download?: InputMaybe<DownloadUncheckedCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageUncheckedCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['Upload']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type InputLogin = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type InputRegister = {
  Download?: InputMaybe<DownloadCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['Upload']>;
  confirmPassword: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};
