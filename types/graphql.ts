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
  image: Scalars['String'];
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
  thumbnail?: InputMaybe<Scalars['String']>;
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
  thumbnail?: InputMaybe<Scalars['String']>;
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
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DownloadCreateWithoutDownloadCategoryInput = {
  author: UserCreateNestedOneWithoutDownloadInput;
  counting?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  thumbnail?: InputMaybe<Scalars['String']>;
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
  thumbnail?: InputMaybe<Scalars['String']>;
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

export type Message = {
  __typename?: 'Message';
  author: User;
  id: Scalars['ID'];
  message: Scalars['String'];
  room: MessageRoom;
  roomID: Scalars['String'];
  userId: Scalars['String'];
};

export type MessageCountAggregate = {
  __typename?: 'MessageCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  roomID: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MessageCreateManyAuthorInput = {
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  roomID: Scalars['String'];
};

export type MessageCreateManyAuthorInputEnvelope = {
  data: Array<MessageCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyRoomInput = {
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  userId: Scalars['String'];
};

export type MessageCreateManyRoomInputEnvelope = {
  data: Array<MessageCreateManyRoomInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<MessageCreateManyAuthorInputEnvelope>;
};

export type MessageCreateNestedManyWithoutRoomInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutRoomInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutRoomInput>>;
  createMany?: InputMaybe<MessageCreateManyRoomInputEnvelope>;
};

export type MessageCreateOrConnectWithoutAuthorInput = {
  create: MessageCreateWithoutAuthorInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutRoomInput = {
  create: MessageCreateWithoutRoomInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutAuthorInput = {
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  room: MessageRoomCreateNestedOneWithoutMessageInput;
};

export type MessageCreateWithoutRoomInput = {
  author: UserCreateNestedOneWithoutMessageInput;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
};

export type MessageMaxAggregate = {
  __typename?: 'MessageMaxAggregate';
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  roomID?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type MessageMinAggregate = {
  __typename?: 'MessageMinAggregate';
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  roomID?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type MessageRoom = {
  __typename?: 'MessageRoom';
  Message?: Maybe<Array<Message>>;
  Project?: Maybe<Array<Project>>;
  _count: MessageRoomCount;
  author: User;
  id: Scalars['ID'];
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type MessageRoomCount = {
  __typename?: 'MessageRoomCount';
  Message: Scalars['Int'];
  Project: Scalars['Int'];
};

export type MessageRoomCountAggregate = {
  __typename?: 'MessageRoomCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MessageRoomCreateManyAuthorInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type MessageRoomCreateManyAuthorInputEnvelope = {
  data: Array<MessageRoomCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageRoomCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<MessageRoomWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageRoomCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<MessageRoomCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<MessageRoomCreateManyAuthorInputEnvelope>;
};

export type MessageRoomCreateNestedOneWithoutMessageInput = {
  connect?: InputMaybe<MessageRoomWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MessageRoomCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<MessageRoomCreateWithoutMessageInput>;
};

export type MessageRoomCreateNestedOneWithoutProjectInput = {
  connect?: InputMaybe<MessageRoomWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MessageRoomCreateOrConnectWithoutProjectInput>;
  create?: InputMaybe<MessageRoomCreateWithoutProjectInput>;
};

export type MessageRoomCreateOrConnectWithoutAuthorInput = {
  create: MessageRoomCreateWithoutAuthorInput;
  where: MessageRoomWhereUniqueInput;
};

export type MessageRoomCreateOrConnectWithoutMessageInput = {
  create: MessageRoomCreateWithoutMessageInput;
  where: MessageRoomWhereUniqueInput;
};

export type MessageRoomCreateOrConnectWithoutProjectInput = {
  create: MessageRoomCreateWithoutProjectInput;
  where: MessageRoomWhereUniqueInput;
};

export type MessageRoomCreateWithoutAuthorInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutRoomInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutRoomInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type MessageRoomCreateWithoutMessageInput = {
  Project?: InputMaybe<ProjectCreateNestedManyWithoutRoomInput>;
  author: UserCreateNestedOneWithoutMessageRoomInput;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type MessageRoomCreateWithoutProjectInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutRoomInput>;
  author: UserCreateNestedOneWithoutMessageRoomInput;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type MessageRoomMaxAggregate = {
  __typename?: 'MessageRoomMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type MessageRoomMinAggregate = {
  __typename?: 'MessageRoomMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type MessageRoomUncheckedCreateInput = {
  Message?: InputMaybe<MessageUncheckedCreateNestedManyWithoutRoomInput>;
  Project?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutRoomInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type MessageRoomUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<MessageRoomWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageRoomCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<MessageRoomCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<MessageRoomCreateManyAuthorInputEnvelope>;
};

export type MessageRoomWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type MessageUncheckedCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  roomID: Scalars['String'];
  userId: Scalars['String'];
};

export type MessageUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<MessageCreateManyAuthorInputEnvelope>;
};

export type MessageUncheckedCreateNestedManyWithoutRoomInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutRoomInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutRoomInput>>;
  createMany?: InputMaybe<MessageCreateManyRoomInputEnvelope>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBanner: Banner;
  createCategory: Category;
  createConfig: Configuration;
  createDownload: Download;
  createDownloadCategory: DownloadCategory;
  createMessage: Message;
  createPage: Page;
  createPost: Post;
  createProject: Project;
  createRoom: MessageRoom;
  createStatus: Array<ProjectStatus>;
  createUser: User;
  deleteBanner: Scalars['Boolean'];
  deleteCategory: Scalars['Boolean'];
  deleteConfig: Scalars['Boolean'];
  deleteDownload: Scalars['Boolean'];
  deleteDownloadCategory: Scalars['Boolean'];
  deleteMessage: Scalars['Boolean'];
  deletePage: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
  deleteProject: Scalars['String'];
  deleteRoom: Scalars['Boolean'];
  deleteStatus: Scalars['Boolean'];
  deleteUser: Scalars['String'];
  login: Scalars['String'];
  register: Scalars['String'];
  updateBanner: Banner;
  updateCategory: Category;
  updateConfig: Configuration;
  updateDownload: Download;
  updateDownloadCategory: DownloadCategory;
  updateMessage: Message;
  updatePage: Page;
  updatePost: Post;
  updateProject: Project;
  updateRoom: MessageRoom;
  updateStatus: ProjectStatus;
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

export type MutationCreateMessageArgs = {
  input: MessageUncheckedCreateInput;
};

export type MutationCreatePageArgs = {
  input: PageUncheckedCreateInput;
};

export type MutationCreatePostArgs = {
  input: PostUncheckedCreateInput;
};

export type MutationCreateProjectArgs = {
  input: ProjectUncheckedCreateInput;
};

export type MutationCreateRoomArgs = {
  inpur: MessageRoomUncheckedCreateInput;
};

export type MutationCreateStatusArgs = {
  input: ProjectStatusUncheckedCreateInput;
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

export type MutationDeleteMessageArgs = {
  id: Scalars['String'];
};

export type MutationDeletePageArgs = {
  id: Scalars['String'];
};

export type MutationDeletePostArgs = {
  id: Scalars['String'];
};

export type MutationDeleteProjectArgs = {
  id: Scalars['String'];
};

export type MutationDeleteRoomArgs = {
  id: Scalars['String'];
};

export type MutationDeleteStatusArgs = {
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

export type MutationUpdateMessageArgs = {
  input: MessageUncheckedCreateInput;
};

export type MutationUpdatePageArgs = {
  input: PageUncheckedCreateInput;
};

export type MutationUpdatePostArgs = {
  input: PostUncheckedCreateInput;
};

export type MutationUpdateProjectArgs = {
  input: ProjectUncheckedCreateInput;
};

export type MutationUpdateRoomArgs = {
  input: MessageRoomUncheckedCreateInput;
};

export type MutationUpdateStatusArgs = {
  input: ProjectStatusUncheckedCreateInput;
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
  thumbnail?: InputMaybe<Scalars['String']>;
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
  thumbnail?: InputMaybe<Scalars['String']>;
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
  thumbnail?: InputMaybe<Scalars['String']>;
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
  thumbnail?: InputMaybe<Scalars['String']>;
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
  thumbnail?: InputMaybe<Scalars['String']>;
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
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updateAt?: InputMaybe<Scalars['DateTime']>;
  view?: InputMaybe<Scalars['Int']>;
};

export type PostCreateWithoutCategoryInput = {
  author: UserCreateNestedOneWithoutPostInput;
  content: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
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
  thumbnail?: InputMaybe<Scalars['String']>;
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

export type Project = {
  __typename?: 'Project';
  author: User;
  id: Scalars['ID'];
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  room: MessageRoom;
  roomID: Scalars['String'];
  status: ProjectStatus;
  statusID: Scalars['String'];
  userId: Scalars['String'];
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  nameEN: Scalars['Int'];
  nameTH: Scalars['Int'];
  roomID: Scalars['Int'];
  statusID: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProjectCreateManyAuthorInput = {
  id?: InputMaybe<Scalars['String']>;
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  roomID: Scalars['String'];
  statusID: Scalars['String'];
};

export type ProjectCreateManyAuthorInputEnvelope = {
  data: Array<ProjectCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateManyRoomInput = {
  id?: InputMaybe<Scalars['String']>;
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  statusID: Scalars['String'];
  userId: Scalars['String'];
};

export type ProjectCreateManyRoomInputEnvelope = {
  data: Array<ProjectCreateManyRoomInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateManyStatusInput = {
  id?: InputMaybe<Scalars['String']>;
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  roomID: Scalars['String'];
  userId: Scalars['String'];
};

export type ProjectCreateManyStatusInputEnvelope = {
  data: Array<ProjectCreateManyStatusInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<ProjectCreateManyAuthorInputEnvelope>;
};

export type ProjectCreateNestedManyWithoutRoomInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutRoomInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutRoomInput>>;
  createMany?: InputMaybe<ProjectCreateManyRoomInputEnvelope>;
};

export type ProjectCreateOrConnectWithoutAuthorInput = {
  create: ProjectCreateWithoutAuthorInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutRoomInput = {
  create: ProjectCreateWithoutRoomInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutStatusInput = {
  create: ProjectCreateWithoutStatusInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutAuthorInput = {
  id?: InputMaybe<Scalars['String']>;
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  room: MessageRoomCreateNestedOneWithoutProjectInput;
  status: ProjectStatusCreateNestedOneWithoutProjectInput;
};

export type ProjectCreateWithoutRoomInput = {
  author: UserCreateNestedOneWithoutProjectInput;
  id?: InputMaybe<Scalars['String']>;
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  status: ProjectStatusCreateNestedOneWithoutProjectInput;
};

export type ProjectCreateWithoutStatusInput = {
  author: UserCreateNestedOneWithoutProjectInput;
  id?: InputMaybe<Scalars['String']>;
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  room: MessageRoomCreateNestedOneWithoutProjectInput;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  id?: Maybe<Scalars['String']>;
  nameEN?: Maybe<Scalars['String']>;
  nameTH?: Maybe<Scalars['String']>;
  roomID?: Maybe<Scalars['String']>;
  statusID?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  id?: Maybe<Scalars['String']>;
  nameEN?: Maybe<Scalars['String']>;
  nameTH?: Maybe<Scalars['String']>;
  roomID?: Maybe<Scalars['String']>;
  statusID?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProjectStatus = {
  __typename?: 'ProjectStatus';
  Project?: Maybe<Array<Project>>;
  _count: ProjectStatusCount;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ProjectStatusCount = {
  __typename?: 'ProjectStatusCount';
  Project: Scalars['Int'];
};

export type ProjectStatusCountAggregate = {
  __typename?: 'ProjectStatusCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type ProjectStatusCreateNestedOneWithoutProjectInput = {
  connect?: InputMaybe<ProjectStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectStatusCreateOrConnectWithoutProjectInput>;
  create?: InputMaybe<ProjectStatusCreateWithoutProjectInput>;
};

export type ProjectStatusCreateOrConnectWithoutProjectInput = {
  create: ProjectStatusCreateWithoutProjectInput;
  where: ProjectStatusWhereUniqueInput;
};

export type ProjectStatusCreateWithoutProjectInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProjectStatusMaxAggregate = {
  __typename?: 'ProjectStatusMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProjectStatusMinAggregate = {
  __typename?: 'ProjectStatusMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProjectStatusUncheckedCreateInput = {
  Project?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutStatusInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProjectStatusWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ProjectUncheckedCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  nameEN: Scalars['String'];
  nameTH: Scalars['String'];
  roomID: Scalars['String'];
  statusID: Scalars['String'];
  userId: Scalars['String'];
};

export type ProjectUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<ProjectCreateManyAuthorInputEnvelope>;
};

export type ProjectUncheckedCreateNestedManyWithoutRoomInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutRoomInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutRoomInput>>;
  createMany?: InputMaybe<ProjectCreateManyRoomInputEnvelope>;
};

export type ProjectUncheckedCreateNestedManyWithoutStatusInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutStatusInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutStatusInput>>;
  createMany?: InputMaybe<ProjectCreateManyStatusInputEnvelope>;
};

export type ProjectWhereUniqueInput = {
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
  fineStatus: ProjectStatus;
  getStatus: ProjectStatus;
  message: Message;
  messageRoom: MessageRoom;
  messageRooms: Array<MessageRoom>;
  messages: Array<Message>;
  page: Page;
  pages: Array<Page>;
  post: Post;
  posts: Array<Post>;
  project: Project;
  projects: Array<Project>;
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

export type QueryFineStatusArgs = {
  id: Scalars['String'];
};

export type QueryMessageArgs = {
  id: Scalars['String'];
};

export type QueryMessageRoomArgs = {
  id: Scalars['String'];
};

export type QueryPageArgs = {
  id: Scalars['String'];
};

export type QueryPostArgs = {
  id: Scalars['String'];
};

export type QueryProjectArgs = {
  id: Scalars['String'];
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Teacher = 'TEACHER',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  Download?: Maybe<Array<Download>>;
  Message?: Maybe<Array<Message>>;
  MessageRoom?: Maybe<Array<MessageRoom>>;
  Page?: Maybe<Array<Page>>;
  Post?: Maybe<Array<Post>>;
  Project?: Maybe<Array<Project>>;
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
  Message: Scalars['Int'];
  MessageRoom: Scalars['Int'];
  Page: Scalars['Int'];
  Post: Scalars['Int'];
  Project: Scalars['Int'];
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

export type UserCreateNestedOneWithoutMessageInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<UserCreateWithoutMessageInput>;
};

export type UserCreateNestedOneWithoutMessageRoomInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessageRoomInput>;
  create?: InputMaybe<UserCreateWithoutMessageRoomInput>;
};

export type UserCreateNestedOneWithoutPostInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostInput>;
  create?: InputMaybe<UserCreateWithoutPostInput>;
};

export type UserCreateNestedOneWithoutProjectInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProjectInput>;
  create?: InputMaybe<UserCreateWithoutProjectInput>;
};

export type UserCreateOrConnectWithoutDownloadInput = {
  create: UserCreateWithoutDownloadInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessageInput = {
  create: UserCreateWithoutMessageInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessageRoomInput = {
  create: UserCreateWithoutMessageRoomInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostInput = {
  create: UserCreateWithoutPostInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProjectInput = {
  create: UserCreateWithoutProjectInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutDownloadInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  MessageRoom?: InputMaybe<MessageRoomCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutMessageInput = {
  Download?: InputMaybe<DownloadCreateNestedManyWithoutAuthorInput>;
  MessageRoom?: InputMaybe<MessageRoomCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutMessageRoomInput = {
  Download?: InputMaybe<DownloadCreateNestedManyWithoutAuthorInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['String']>;
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
  Message?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  MessageRoom?: InputMaybe<MessageRoomCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageCreateNestedManyWithoutAuthorInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['String']>;
  createAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProjectInput = {
  Download?: InputMaybe<DownloadCreateNestedManyWithoutAuthorInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  MessageRoom?: InputMaybe<MessageRoomCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['String']>;
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
  Message?: InputMaybe<MessageUncheckedCreateNestedManyWithoutAuthorInput>;
  MessageRoom?: InputMaybe<MessageRoomUncheckedCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageUncheckedCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
  Project?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['String']>;
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
  Message?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  MessageRoom?: InputMaybe<MessageRoomCreateNestedManyWithoutAuthorInput>;
  Page?: InputMaybe<PageCreateNestedManyWithoutAuthorInput>;
  Post?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutAuthorInput>;
  avatar?: InputMaybe<Scalars['String']>;
  confirmPassword: Scalars['String'];
  createAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updateAt?: InputMaybe<Scalars['DateTime']>;
};
