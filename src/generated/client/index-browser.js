
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


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

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  salt: 'salt',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AnimalScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  kind: 'kind',
  name: 'name',
  age: 'age',
  color: 'color',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AuthenticationScalarFieldEnum = {
  id: 'id',
  ref_id: 'ref_id',
  ref_table: 'ref_table',
  token: 'token',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CityScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.HotelScalarFieldEnum = {
  id: 'id',
  vendor_id: 'vendor_id',
  name: 'name',
  image: 'image',
  city: 'city',
  district: 'district',
  phone: 'phone',
  description: 'description',
  rating: 'rating',
  rating_count: 'rating_count',
  price: 'price',
  status: 'status',
  address: 'address',
  lat: 'lat',
  lon: 'lon',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Hotel_imagesScalarFieldEnum = {
  id: 'id',
  hotel_id: 'hotel_id',
  image: 'image',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  image: 'image',
  ref_id: 'ref_id',
  ref_table: 'ref_table',
  ref_column: 'ref_column',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  hotel_id: 'hotel_id',
  room_id: 'room_id',
  user_id: 'user_id',
  vendor_id: 'vendor_id',
  start_date: 'start_date',
  end_date: 'end_date',
  status: 'status',
  notes: 'notes',
  amount: 'amount',
  expired_at: 'expired_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.RoomScalarFieldEnum = {
  id: 'id',
  hotel_id: 'hotel_id',
  name: 'name',
  image: 'image',
  description: 'description',
  max_pet: 'max_pet',
  price: 'price',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.VendorScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  salt: 'salt',
  saldo: 'saldo',
  created_at: 'created_at',
  updated_at: 'updated_at'
};


exports.Prisma.ModelName = {
  user: 'user',
  vendor: 'vendor',
  admin: 'admin',
  hotel: 'hotel',
  hotel_images: 'hotel_images',
  room: 'room',
  authentication: 'authentication',
  image: 'image',
  city: 'city',
  order: 'order',
  animal: 'animal'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
