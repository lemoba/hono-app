
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.1
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.1",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Sp_admin_menusScalarFieldEnum = {
  id: 'id',
  parent_id: 'parent_id',
  path: 'path',
  name: 'name',
  type_name: 'type_name',
  component: 'component',
  sort: 'sort',
  icon: 'icon',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_admin_rolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  desc: 'desc',
  rules: 'rules',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_admin_tokensScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  token: 'token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_adminsScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  password_modify: 'password_modify',
  roles: 'roles',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  status: 'status'
};

exports.Prisma.Sp_failed_jobsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception',
  failed_at: 'failed_at'
};

exports.Prisma.Sp_filesScalarFieldEnum = {
  id: 'id',
  file_id: 'file_id',
  url: 'url',
  title: 'title',
  type: 'type',
  group_id: 'group_id',
  sort: 'sort',
  cover: 'cover',
  info: 'info',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_goodsScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  price: 'price',
  coins: 'coins',
  product_tier: 'product_tier',
  bonus: 'bonus',
  sort: 'sort',
  desc: 'desc',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_home_seriesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  icon: 'icon',
  desc: 'desc',
  sort: 'sort',
  is_more: 'is_more',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_login_logsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  logs: 'logs',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_migrationsScalarFieldEnum = {
  id: 'id',
  migration: 'migration',
  batch: 'batch'
};

exports.Prisma.Sp_ordersScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  pay_order_id: 'pay_order_id',
  user_id: 'user_id',
  goods_id: 'goods_id',
  total_amount: 'total_amount',
  actual_amount: 'actual_amount',
  pay_type: 'pay_type',
  callback_status: 'callback_status',
  status: 'status',
  os_type: 'os_type',
  dev_no: 'dev_no',
  order_ip: 'order_ip',
  order_country: 'order_country',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_payment_recordsScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  user_id: 'user_id',
  amount: 'amount',
  coins: 'coins',
  bonus: 'bonus',
  type: 'type',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_privacy_settingsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  type: 'type',
  content: 'content',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_purchase_recordsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  video_group_id: 'video_group_id',
  video_id: 'video_id',
  costs: 'costs',
  pay_type: 'pay_type',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_reward_recordsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  reward_id: 'reward_id',
  updated_at: 'updated_at',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_rewards_listScalarFieldEnum = {
  id: 'id',
  type: 'type',
  is_once: 'is_once',
  max_nums: 'max_nums',
  sort: 'sort',
  bonus: 'bonus',
  updated_at: 'updated_at',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_rewards_typeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  updated_at: 'updated_at',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_tokensScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  token: 'token',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_upload_logsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  sid: 'sid',
  name: 'name',
  file_id: 'file_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_user_check_inScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  bonus: 'bonus',
  days: 'days',
  type: 'type',
  updated_at: 'updated_at',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_user_collectionsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  video_id: 'video_id',
  video_group_id: 'video_group_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_user_likesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  video_id: 'video_id',
  video_group_id: 'video_group_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_user_my_listsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  video_group_id: 'video_group_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_user_suggestsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  title: 'title',
  content: 'content',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  email: 'email'
};

exports.Prisma.Sp_usersScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  open_id: 'open_id',
  bonus: 'bonus',
  coins: 'coins',
  email: 'email',
  avatar: 'avatar',
  nickname: 'nickname',
  age: 'age',
  gender: 'gender',
  login_type: 'login_type',
  last_login_time: 'last_login_time',
  register_ip: 'register_ip',
  login_ip: 'login_ip',
  register_country: 'register_country',
  login_country: 'login_country',
  register_dev_no: 'register_dev_no',
  login_dev_no: 'login_dev_no',
  register_os_type: 'register_os_type',
  login_os_type: 'login_os_type',
  is_disable: 'is_disable',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_video_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_video_group_categoriesScalarFieldEnum = {
  id: 'id',
  video_group_id: 'video_group_id',
  category_id: 'category_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_video_groupsScalarFieldEnum = {
  id: 'id',
  series_id: 'series_id',
  category_id: 'category_id',
  title: 'title',
  desc: 'desc',
  count: 'count',
  status: 'status',
  cover_id: 'cover_id',
  costs: 'costs',
  pay_type: 'pay_type',
  free_count: 'free_count',
  is_hot: 'is_hot',
  sort: 'sort',
  total_nums: 'total_nums',
  updated_nums: 'updated_nums',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_videosScalarFieldEnum = {
  id: 'id',
  group_id: 'group_id',
  file_id: 'file_id',
  title: 'title',
  cover: 'cover',
  desc: 'desc',
  sort: 'sort',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Sp_view_historiesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  video_id: 'video_id',
  is_finished: 'is_finished',
  video_group_id: 'video_group_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.sp_admin_menusOrderByRelevanceFieldEnum = {
  path: 'path',
  name: 'name',
  type_name: 'type_name',
  component: 'component',
  icon: 'icon'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.sp_admin_rolesOrderByRelevanceFieldEnum = {
  name: 'name',
  desc: 'desc'
};

exports.Prisma.sp_admin_tokensOrderByRelevanceFieldEnum = {
  token: 'token'
};

exports.Prisma.sp_adminsOrderByRelevanceFieldEnum = {
  username: 'username',
  password: 'password'
};

exports.Prisma.sp_failed_jobsOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  connection: 'connection',
  queue: 'queue',
  payload: 'payload',
  exception: 'exception'
};

exports.Prisma.sp_filesOrderByRelevanceFieldEnum = {
  file_id: 'file_id',
  url: 'url',
  title: 'title',
  cover: 'cover'
};

exports.Prisma.sp_goodsOrderByRelevanceFieldEnum = {
  name: 'name',
  product_tier: 'product_tier',
  desc: 'desc'
};

exports.Prisma.sp_home_seriesOrderByRelevanceFieldEnum = {
  title: 'title',
  icon: 'icon',
  desc: 'desc'
};

exports.Prisma.sp_migrationsOrderByRelevanceFieldEnum = {
  migration: 'migration'
};

exports.Prisma.sp_ordersOrderByRelevanceFieldEnum = {
  order_id: 'order_id',
  pay_order_id: 'pay_order_id',
  dev_no: 'dev_no',
  order_ip: 'order_ip',
  order_country: 'order_country'
};

exports.Prisma.sp_payment_recordsOrderByRelevanceFieldEnum = {
  order_id: 'order_id'
};

exports.Prisma.sp_privacy_settingsOrderByRelevanceFieldEnum = {
  title: 'title',
  content: 'content'
};

exports.Prisma.sp_rewards_typeOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.sp_tokensOrderByRelevanceFieldEnum = {
  token: 'token'
};

exports.Prisma.sp_upload_logsOrderByRelevanceFieldEnum = {
  name: 'name',
  file_id: 'file_id'
};

exports.Prisma.sp_user_suggestsOrderByRelevanceFieldEnum = {
  title: 'title',
  content: 'content',
  email: 'email'
};

exports.Prisma.sp_usersOrderByRelevanceFieldEnum = {
  open_id: 'open_id',
  email: 'email',
  avatar: 'avatar',
  nickname: 'nickname',
  register_ip: 'register_ip',
  login_ip: 'login_ip',
  register_country: 'register_country',
  login_country: 'login_country',
  register_dev_no: 'register_dev_no',
  login_dev_no: 'login_dev_no'
};

exports.Prisma.sp_video_categoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  desc: 'desc'
};

exports.Prisma.sp_video_groupsOrderByRelevanceFieldEnum = {
  title: 'title',
  desc: 'desc'
};

exports.Prisma.sp_videosOrderByRelevanceFieldEnum = {
  title: 'title',
  cover: 'cover',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  sp_admin_menus: 'sp_admin_menus',
  sp_admin_roles: 'sp_admin_roles',
  sp_admin_tokens: 'sp_admin_tokens',
  sp_admins: 'sp_admins',
  sp_failed_jobs: 'sp_failed_jobs',
  sp_files: 'sp_files',
  sp_goods: 'sp_goods',
  sp_home_series: 'sp_home_series',
  sp_login_logs: 'sp_login_logs',
  sp_migrations: 'sp_migrations',
  sp_orders: 'sp_orders',
  sp_payment_records: 'sp_payment_records',
  sp_privacy_settings: 'sp_privacy_settings',
  sp_purchase_records: 'sp_purchase_records',
  sp_reward_records: 'sp_reward_records',
  sp_rewards_list: 'sp_rewards_list',
  sp_rewards_type: 'sp_rewards_type',
  sp_tokens: 'sp_tokens',
  sp_upload_logs: 'sp_upload_logs',
  sp_user_check_in: 'sp_user_check_in',
  sp_user_collections: 'sp_user_collections',
  sp_user_likes: 'sp_user_likes',
  sp_user_my_lists: 'sp_user_my_lists',
  sp_user_suggests: 'sp_user_suggests',
  sp_users: 'sp_users',
  sp_video_categories: 'sp_video_categories',
  sp_video_group_categories: 'sp_video_group_categories',
  sp_video_groups: 'sp_video_groups',
  sp_videos: 'sp_videos',
  sp_view_histories: 'sp_view_histories'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
