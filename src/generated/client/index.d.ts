
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = {
  id: string
  name: string
  email: string
  phone: string | null
  created_at: Date
  updated_at: Date
}

/**
 * Model vendor
 * 
 */
export type vendor = {
  id: string
  email: string
  password: string
  salt: string
  saldo: number
  created_at: Date
  updated_at: Date
}

/**
 * Model admin
 * 
 */
export type admin = {
  id: string
  email: string
  password: string
  salt: string
  created_at: Date
  updated_at: Date
}

/**
 * Model hotel
 * 
 */
export type hotel = {
  id: string
  vendor_id: string
  name: string
  image: string | null
  city: string | null
  district: string | null
  phone: string | null
  description: string | null
  rating: number | null
  rating_count: number | null
  price: number | null
  status: boolean
  address: string | null
  lat: number | null
  lon: number | null
  created_at: Date
  updated_at: Date
}

/**
 * Model hotel_images
 * 
 */
export type hotel_images = {
  id: string
  hotel_id: string
  image: string
  created_at: Date
  updated_at: Date
}

/**
 * Model room
 * 
 */
export type room = {
  id: string
  hotel_id: string
  name: string
  image: string
  description: string
  max_pet: number
  price: number
  created_at: Date
  updated_at: Date
}

/**
 * Model authentication
 * 
 */
export type authentication = {
  id: string
  ref_id: string
  ref_table: string
  token: string
  created_at: Date
  updated_at: Date
}

/**
 * Model image
 * 
 */
export type image = {
  id: string
  image: string
  ref_id: string
  ref_table: string
  ref_column: string
  created_at: Date
  updated_at: Date
}

/**
 * Model city
 * 
 */
export type city = {
  id: string
  name: string
  status: boolean
  created_at: Date
  updated_at: Date
}

/**
 * Model order
 * 
 */
export type order = {
  id: string
  hotel_id: string
  room_id: string
  user_id: string
  vendor_id: string
  start_date: Date
  end_date: Date
  status: number
  notes: string
  amount: number
  expired_at: Date
  created_at: Date
  updated_at: Date
}

/**
 * Model animal
 * 
 */
export type animal = {
  id: string
  order_id: string
  kind: string
  name: string
  age: string
  color: string
  created_at: Date
  updated_at: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.vendorDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<GlobalReject>;

  /**
   * `prisma.hotel`: Exposes CRUD operations for the **hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.hotelDelegate<GlobalReject>;

  /**
   * `prisma.hotel_images`: Exposes CRUD operations for the **hotel_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotel_images
    * const hotel_images = await prisma.hotel_images.findMany()
    * ```
    */
  get hotel_images(): Prisma.hotel_imagesDelegate<GlobalReject>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.roomDelegate<GlobalReject>;

  /**
   * `prisma.authentication`: Exposes CRUD operations for the **authentication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authentications
    * const authentications = await prisma.authentication.findMany()
    * ```
    */
  get authentication(): Prisma.authenticationDelegate<GlobalReject>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.imageDelegate<GlobalReject>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **city** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.cityDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<GlobalReject>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.animalDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    order: number
  }

  export type UserCountOutputTypeSelect = {
    order?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type VendorCountOutputType
   */


  export type VendorCountOutputType = {
    order: number
  }

  export type VendorCountOutputTypeSelect = {
    order?: boolean
  }

  export type VendorCountOutputTypeGetPayload<S extends boolean | null | undefined | VendorCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VendorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VendorCountOutputTypeArgs)
    ? VendorCountOutputType 
    : S extends { select: any } & (VendorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VendorCountOutputType ? VendorCountOutputType[P] : never
  } 
      : VendorCountOutputType




  // Custom InputTypes

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect | null
  }



  /**
   * Count Type HotelCountOutputType
   */


  export type HotelCountOutputType = {
    images: number
    rooms: number
    order: number
  }

  export type HotelCountOutputTypeSelect = {
    images?: boolean
    rooms?: boolean
    order?: boolean
  }

  export type HotelCountOutputTypeGetPayload<S extends boolean | null | undefined | HotelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HotelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HotelCountOutputTypeArgs)
    ? HotelCountOutputType 
    : S extends { select: any } & (HotelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HotelCountOutputType ? HotelCountOutputType[P] : never
  } 
      : HotelCountOutputType




  // Custom InputTypes

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect | null
  }



  /**
   * Count Type RoomCountOutputType
   */


  export type RoomCountOutputType = {
    order: number
  }

  export type RoomCountOutputTypeSelect = {
    order?: boolean
  }

  export type RoomCountOutputTypeGetPayload<S extends boolean | null | undefined | RoomCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoomCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoomCountOutputTypeArgs)
    ? RoomCountOutputType 
    : S extends { select: any } & (RoomCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoomCountOutputType ? RoomCountOutputType[P] : never
  } 
      : RoomCountOutputType




  // Custom InputTypes

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect | null
  }



  /**
   * Count Type OrderCountOutputType
   */


  export type OrderCountOutputType = {
    animals: number
  }

  export type OrderCountOutputTypeSelect = {
    animals?: boolean
  }

  export type OrderCountOutputTypeGetPayload<S extends boolean | null | undefined | OrderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrderCountOutputTypeArgs)
    ? OrderCountOutputType 
    : S extends { select: any } & (OrderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrderCountOutputType ? OrderCountOutputType[P] : never
  } 
      : OrderCountOutputType




  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model user
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | user$orderArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type userInclude = {
    order?: boolean | user$orderArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type userGetPayload<S extends boolean | null | undefined | userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user :
    S extends undefined ? never :
    S extends { include: any } & (userArgs | userFindManyArgs)
    ? user  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'order' ? Array < orderGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (userArgs | userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'order' ? Array < orderGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof user ? user[P] : never
  } 
      : user


  type userCountArgs = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): Prisma.PrismaPromise<Array<userGetPayload<T>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {userFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: userFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {userAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: userAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    order<T extends user$orderArgs= {}>(args?: Subset<T, user$orderArgs>): Prisma.PrismaPromise<Array<orderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user base type for findUnique actions
   */
  export type userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUnique
   */
  export interface userFindUniqueArgs extends userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user base type for findFirst actions
   */
  export type userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * user findFirst
   */
  export interface userFindFirstArgs extends userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<userCreateManyInput>
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user findRaw
   */
  export type userFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * user aggregateRaw
   */
  export type userAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * user.order
   */
  export type user$orderArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    where?: orderWhereInput
    orderBy?: Enumerable<orderOrderByWithRelationInput>
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude | null
  }



  /**
   * Model vendor
   */


  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    saldo: number | null
  }

  export type VendorSumAggregateOutputType = {
    saldo: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    salt: string | null
    saldo: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    salt: string | null
    saldo: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    email: number
    password: number
    salt: number
    saldo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    saldo?: true
  }

  export type VendorSumAggregateInputType = {
    saldo?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    salt?: true
    saldo?: true
    created_at?: true
    updated_at?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    salt?: true
    saldo?: true
    created_at?: true
    updated_at?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    salt?: true
    saldo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VendorAggregateArgs = {
    /**
     * Filter which vendor to aggregate.
     */
    where?: vendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: Enumerable<vendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs = {
    where?: vendorWhereInput
    orderBy?: Enumerable<vendorOrderByWithAggregationInput>
    by: VendorScalarFieldEnum[]
    having?: vendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }


  export type VendorGroupByOutputType = {
    id: string
    email: string
    password: string
    salt: string
    saldo: number
    created_at: Date
    updated_at: Date
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type vendorSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    saldo?: boolean
    created_at?: boolean
    updated_at?: boolean
    hotel?: boolean | hotelArgs
    order?: boolean | vendor$orderArgs
    _count?: boolean | VendorCountOutputTypeArgs
  }


  export type vendorInclude = {
    hotel?: boolean | hotelArgs
    order?: boolean | vendor$orderArgs
    _count?: boolean | VendorCountOutputTypeArgs
  }

  export type vendorGetPayload<S extends boolean | null | undefined | vendorArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? vendor :
    S extends undefined ? never :
    S extends { include: any } & (vendorArgs | vendorFindManyArgs)
    ? vendor  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'hotel' ? hotelGetPayload<S['include'][P]> | null :
        P extends 'order' ? Array < orderGetPayload<S['include'][P]>>  :
        P extends '_count' ? VendorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (vendorArgs | vendorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'hotel' ? hotelGetPayload<S['select'][P]> | null :
        P extends 'order' ? Array < orderGetPayload<S['select'][P]>>  :
        P extends '_count' ? VendorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof vendor ? vendor[P] : never
  } 
      : vendor


  type vendorCountArgs = 
    Omit<vendorFindManyArgs, 'select' | 'include'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface vendorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Vendor that matches the filter.
     * @param {vendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends vendorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, vendorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'vendor'> extends True ? Prisma__vendorClient<vendorGetPayload<T>> : Prisma__vendorClient<vendorGetPayload<T> | null, null>

    /**
     * Find one Vendor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {vendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends vendorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, vendorFindUniqueOrThrowArgs>
    ): Prisma__vendorClient<vendorGetPayload<T>>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends vendorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, vendorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'vendor'> extends True ? Prisma__vendorClient<vendorGetPayload<T>> : Prisma__vendorClient<vendorGetPayload<T> | null, null>

    /**
     * Find the first Vendor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends vendorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, vendorFindFirstOrThrowArgs>
    ): Prisma__vendorClient<vendorGetPayload<T>>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends vendorFindManyArgs>(
      args?: SelectSubset<T, vendorFindManyArgs>
    ): Prisma.PrismaPromise<Array<vendorGetPayload<T>>>

    /**
     * Create a Vendor.
     * @param {vendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
    **/
    create<T extends vendorCreateArgs>(
      args: SelectSubset<T, vendorCreateArgs>
    ): Prisma__vendorClient<vendorGetPayload<T>>

    /**
     * Create many Vendors.
     *     @param {vendorCreateManyArgs} args - Arguments to create many Vendors.
     *     @example
     *     // Create many Vendors
     *     const vendor = await prisma.vendor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends vendorCreateManyArgs>(
      args?: SelectSubset<T, vendorCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {vendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
    **/
    delete<T extends vendorDeleteArgs>(
      args: SelectSubset<T, vendorDeleteArgs>
    ): Prisma__vendorClient<vendorGetPayload<T>>

    /**
     * Update one Vendor.
     * @param {vendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends vendorUpdateArgs>(
      args: SelectSubset<T, vendorUpdateArgs>
    ): Prisma__vendorClient<vendorGetPayload<T>>

    /**
     * Delete zero or more Vendors.
     * @param {vendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends vendorDeleteManyArgs>(
      args?: SelectSubset<T, vendorDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends vendorUpdateManyArgs>(
      args: SelectSubset<T, vendorUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {vendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
    **/
    upsert<T extends vendorUpsertArgs>(
      args: SelectSubset<T, vendorUpsertArgs>
    ): Prisma__vendorClient<vendorGetPayload<T>>

    /**
     * Find zero or more Vendors that matches the filter.
     * @param {vendorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vendor = await prisma.vendor.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: vendorFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vendor.
     * @param {vendorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vendor = await prisma.vendor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: vendorAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends vendorCountArgs>(
      args?: Subset<T, vendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__vendorClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    hotel<T extends hotelArgs= {}>(args?: Subset<T, hotelArgs>): Prisma__hotelClient<hotelGetPayload<T> | Null>;

    order<T extends vendor$orderArgs= {}>(args?: Subset<T, vendor$orderArgs>): Prisma.PrismaPromise<Array<orderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * vendor base type for findUnique actions
   */
  export type vendorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
    /**
     * Filter, which vendor to fetch.
     */
    where: vendorWhereUniqueInput
  }

  /**
   * vendor findUnique
   */
  export interface vendorFindUniqueArgs extends vendorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * vendor findUniqueOrThrow
   */
  export type vendorFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
    /**
     * Filter, which vendor to fetch.
     */
    where: vendorWhereUniqueInput
  }


  /**
   * vendor base type for findFirst actions
   */
  export type vendorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
    /**
     * Filter, which vendor to fetch.
     */
    where?: vendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: Enumerable<vendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendors.
     */
    cursor?: vendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendors.
     */
    distinct?: Enumerable<VendorScalarFieldEnum>
  }

  /**
   * vendor findFirst
   */
  export interface vendorFindFirstArgs extends vendorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * vendor findFirstOrThrow
   */
  export type vendorFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
    /**
     * Filter, which vendor to fetch.
     */
    where?: vendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: Enumerable<vendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendors.
     */
    cursor?: vendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendors.
     */
    distinct?: Enumerable<VendorScalarFieldEnum>
  }


  /**
   * vendor findMany
   */
  export type vendorFindManyArgs = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
    /**
     * Filter, which vendors to fetch.
     */
    where?: vendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: Enumerable<vendorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendors.
     */
    cursor?: vendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    distinct?: Enumerable<VendorScalarFieldEnum>
  }


  /**
   * vendor create
   */
  export type vendorCreateArgs = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
    /**
     * The data needed to create a vendor.
     */
    data: XOR<vendorCreateInput, vendorUncheckedCreateInput>
  }


  /**
   * vendor createMany
   */
  export type vendorCreateManyArgs = {
    /**
     * The data used to create many vendors.
     */
    data: Enumerable<vendorCreateManyInput>
  }


  /**
   * vendor update
   */
  export type vendorUpdateArgs = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
    /**
     * The data needed to update a vendor.
     */
    data: XOR<vendorUpdateInput, vendorUncheckedUpdateInput>
    /**
     * Choose, which vendor to update.
     */
    where: vendorWhereUniqueInput
  }


  /**
   * vendor updateMany
   */
  export type vendorUpdateManyArgs = {
    /**
     * The data used to update vendors.
     */
    data: XOR<vendorUpdateManyMutationInput, vendorUncheckedUpdateManyInput>
    /**
     * Filter which vendors to update
     */
    where?: vendorWhereInput
  }


  /**
   * vendor upsert
   */
  export type vendorUpsertArgs = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
    /**
     * The filter to search for the vendor to update in case it exists.
     */
    where: vendorWhereUniqueInput
    /**
     * In case the vendor found by the `where` argument doesn't exist, create a new vendor with this data.
     */
    create: XOR<vendorCreateInput, vendorUncheckedCreateInput>
    /**
     * In case the vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendorUpdateInput, vendorUncheckedUpdateInput>
  }


  /**
   * vendor delete
   */
  export type vendorDeleteArgs = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
    /**
     * Filter which vendor to delete.
     */
    where: vendorWhereUniqueInput
  }


  /**
   * vendor deleteMany
   */
  export type vendorDeleteManyArgs = {
    /**
     * Filter which vendors to delete
     */
    where?: vendorWhereInput
  }


  /**
   * vendor findRaw
   */
  export type vendorFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * vendor aggregateRaw
   */
  export type vendorAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * vendor.order
   */
  export type vendor$orderArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    where?: orderWhereInput
    orderBy?: Enumerable<orderOrderByWithRelationInput>
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * vendor without action
   */
  export type vendorArgs = {
    /**
     * Select specific fields to fetch from the vendor
     */
    select?: vendorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: vendorInclude | null
  }



  /**
   * Model admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    salt: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    salt: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    salt: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    salt?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    salt?: true
    created_at?: true
    updated_at?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    salt?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: Enumerable<adminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: adminWhereInput
    orderBy?: Enumerable<adminOrderByWithAggregationInput>
    by: AdminScalarFieldEnum[]
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    salt: string
    created_at: Date
    updated_at: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    salt?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type adminGetPayload<S extends boolean | null | undefined | adminArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? admin :
    S extends undefined ? never :
    S extends { include: any } & (adminArgs | adminFindManyArgs)
    ? admin 
    : S extends { select: any } & (adminArgs | adminFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof admin ? admin[P] : never
  } 
      : admin


  type adminCountArgs = 
    Omit<adminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, adminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'admin'> extends True ? Prisma__adminClient<adminGetPayload<T>> : Prisma__adminClient<adminGetPayload<T> | null, null>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, adminFindUniqueOrThrowArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, adminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'admin'> extends True ? Prisma__adminClient<adminGetPayload<T>> : Prisma__adminClient<adminGetPayload<T> | null, null>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, adminFindFirstOrThrowArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends adminFindManyArgs>(
      args?: SelectSubset<T, adminFindManyArgs>
    ): Prisma.PrismaPromise<Array<adminGetPayload<T>>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends adminCreateArgs>(
      args: SelectSubset<T, adminCreateArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Create many Admins.
     *     @param {adminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adminCreateManyArgs>(
      args?: SelectSubset<T, adminCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends adminDeleteArgs>(
      args: SelectSubset<T, adminDeleteArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adminUpdateArgs>(
      args: SelectSubset<T, adminUpdateArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adminDeleteManyArgs>(
      args?: SelectSubset<T, adminDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adminUpdateManyArgs>(
      args: SelectSubset<T, adminUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends adminUpsertArgs>(
      args: SelectSubset<T, adminUpsertArgs>
    ): Prisma__adminClient<adminGetPayload<T>>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {adminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: adminFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {adminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: adminAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__adminClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * admin base type for findUnique actions
   */
  export type adminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUnique
   */
  export interface adminFindUniqueArgs extends adminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin base type for findFirst actions
   */
  export type adminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: Enumerable<adminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * admin findFirst
   */
  export interface adminFindFirstArgs extends adminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: Enumerable<adminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * admin findMany
   */
  export type adminFindManyArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: Enumerable<adminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * admin create
   */
  export type adminCreateArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }


  /**
   * admin createMany
   */
  export type adminCreateManyArgs = {
    /**
     * The data used to create many admins.
     */
    data: Enumerable<adminCreateManyInput>
  }


  /**
   * admin update
   */
  export type adminUpdateArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }


  /**
   * admin upsert
   */
  export type adminUpsertArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }


  /**
   * admin delete
   */
  export type adminDeleteArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }


  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }


  /**
   * admin findRaw
   */
  export type adminFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * admin aggregateRaw
   */
  export type adminAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * admin without action
   */
  export type adminArgs = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect | null
  }



  /**
   * Model hotel
   */


  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelAvgAggregateOutputType = {
    rating: number | null
    rating_count: number | null
    price: number | null
    lat: number | null
    lon: number | null
  }

  export type HotelSumAggregateOutputType = {
    rating: number | null
    rating_count: number | null
    price: number | null
    lat: number | null
    lon: number | null
  }

  export type HotelMinAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    name: string | null
    image: string | null
    city: string | null
    district: string | null
    phone: string | null
    description: string | null
    rating: number | null
    rating_count: number | null
    price: number | null
    status: boolean | null
    address: string | null
    lat: number | null
    lon: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HotelMaxAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    name: string | null
    image: string | null
    city: string | null
    district: string | null
    phone: string | null
    description: string | null
    rating: number | null
    rating_count: number | null
    price: number | null
    status: boolean | null
    address: string | null
    lat: number | null
    lon: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    vendor_id: number
    name: number
    image: number
    city: number
    district: number
    phone: number
    description: number
    rating: number
    rating_count: number
    price: number
    status: number
    address: number
    lat: number
    lon: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HotelAvgAggregateInputType = {
    rating?: true
    rating_count?: true
    price?: true
    lat?: true
    lon?: true
  }

  export type HotelSumAggregateInputType = {
    rating?: true
    rating_count?: true
    price?: true
    lat?: true
    lon?: true
  }

  export type HotelMinAggregateInputType = {
    id?: true
    vendor_id?: true
    name?: true
    image?: true
    city?: true
    district?: true
    phone?: true
    description?: true
    rating?: true
    rating_count?: true
    price?: true
    status?: true
    address?: true
    lat?: true
    lon?: true
    created_at?: true
    updated_at?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    vendor_id?: true
    name?: true
    image?: true
    city?: true
    district?: true
    phone?: true
    description?: true
    rating?: true
    rating_count?: true
    price?: true
    status?: true
    address?: true
    lat?: true
    lon?: true
    created_at?: true
    updated_at?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    vendor_id?: true
    name?: true
    image?: true
    city?: true
    district?: true
    phone?: true
    description?: true
    rating?: true
    rating_count?: true
    price?: true
    status?: true
    address?: true
    lat?: true
    lon?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HotelAggregateArgs = {
    /**
     * Filter which hotel to aggregate.
     */
    where?: hotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotels to fetch.
     */
    orderBy?: Enumerable<hotelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs = {
    where?: hotelWhereInput
    orderBy?: Enumerable<hotelOrderByWithAggregationInput>
    by: HotelScalarFieldEnum[]
    having?: hotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _avg?: HotelAvgAggregateInputType
    _sum?: HotelSumAggregateInputType
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }


  export type HotelGroupByOutputType = {
    id: string
    vendor_id: string
    name: string
    image: string | null
    city: string | null
    district: string | null
    phone: string | null
    description: string | null
    rating: number | null
    rating_count: number | null
    price: number | null
    status: boolean
    address: string | null
    lat: number | null
    lon: number | null
    created_at: Date
    updated_at: Date
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type hotelSelect = {
    id?: boolean
    vendor_id?: boolean
    name?: boolean
    image?: boolean
    city?: boolean
    district?: boolean
    phone?: boolean
    description?: boolean
    rating?: boolean
    rating_count?: boolean
    price?: boolean
    status?: boolean
    address?: boolean
    lat?: boolean
    lon?: boolean
    created_at?: boolean
    updated_at?: boolean
    images?: boolean | hotel$imagesArgs
    vendor?: boolean | vendorArgs
    rooms?: boolean | hotel$roomsArgs
    order?: boolean | hotel$orderArgs
    _count?: boolean | HotelCountOutputTypeArgs
  }


  export type hotelInclude = {
    images?: boolean | hotel$imagesArgs
    vendor?: boolean | vendorArgs
    rooms?: boolean | hotel$roomsArgs
    order?: boolean | hotel$orderArgs
    _count?: boolean | HotelCountOutputTypeArgs
  }

  export type hotelGetPayload<S extends boolean | null | undefined | hotelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? hotel :
    S extends undefined ? never :
    S extends { include: any } & (hotelArgs | hotelFindManyArgs)
    ? hotel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'images' ? Array < hotel_imagesGetPayload<S['include'][P]>>  :
        P extends 'vendor' ? vendorGetPayload<S['include'][P]> :
        P extends 'rooms' ? Array < roomGetPayload<S['include'][P]>>  :
        P extends 'order' ? Array < orderGetPayload<S['include'][P]>>  :
        P extends '_count' ? HotelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (hotelArgs | hotelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'images' ? Array < hotel_imagesGetPayload<S['select'][P]>>  :
        P extends 'vendor' ? vendorGetPayload<S['select'][P]> :
        P extends 'rooms' ? Array < roomGetPayload<S['select'][P]>>  :
        P extends 'order' ? Array < orderGetPayload<S['select'][P]>>  :
        P extends '_count' ? HotelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof hotel ? hotel[P] : never
  } 
      : hotel


  type hotelCountArgs = 
    Omit<hotelFindManyArgs, 'select' | 'include'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface hotelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Hotel that matches the filter.
     * @param {hotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hotelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, hotelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'hotel'> extends True ? Prisma__hotelClient<hotelGetPayload<T>> : Prisma__hotelClient<hotelGetPayload<T> | null, null>

    /**
     * Find one Hotel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {hotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends hotelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, hotelFindUniqueOrThrowArgs>
    ): Prisma__hotelClient<hotelGetPayload<T>>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hotelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, hotelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'hotel'> extends True ? Prisma__hotelClient<hotelGetPayload<T>> : Prisma__hotelClient<hotelGetPayload<T> | null, null>

    /**
     * Find the first Hotel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends hotelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, hotelFindFirstOrThrowArgs>
    ): Prisma__hotelClient<hotelGetPayload<T>>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends hotelFindManyArgs>(
      args?: SelectSubset<T, hotelFindManyArgs>
    ): Prisma.PrismaPromise<Array<hotelGetPayload<T>>>

    /**
     * Create a Hotel.
     * @param {hotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
    **/
    create<T extends hotelCreateArgs>(
      args: SelectSubset<T, hotelCreateArgs>
    ): Prisma__hotelClient<hotelGetPayload<T>>

    /**
     * Create many Hotels.
     *     @param {hotelCreateManyArgs} args - Arguments to create many Hotels.
     *     @example
     *     // Create many Hotels
     *     const hotel = await prisma.hotel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hotelCreateManyArgs>(
      args?: SelectSubset<T, hotelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hotel.
     * @param {hotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
    **/
    delete<T extends hotelDeleteArgs>(
      args: SelectSubset<T, hotelDeleteArgs>
    ): Prisma__hotelClient<hotelGetPayload<T>>

    /**
     * Update one Hotel.
     * @param {hotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hotelUpdateArgs>(
      args: SelectSubset<T, hotelUpdateArgs>
    ): Prisma__hotelClient<hotelGetPayload<T>>

    /**
     * Delete zero or more Hotels.
     * @param {hotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hotelDeleteManyArgs>(
      args?: SelectSubset<T, hotelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hotelUpdateManyArgs>(
      args: SelectSubset<T, hotelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hotel.
     * @param {hotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
    **/
    upsert<T extends hotelUpsertArgs>(
      args: SelectSubset<T, hotelUpsertArgs>
    ): Prisma__hotelClient<hotelGetPayload<T>>

    /**
     * Find zero or more Hotels that matches the filter.
     * @param {hotelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hotel = await prisma.hotel.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: hotelFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Hotel.
     * @param {hotelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hotel = await prisma.hotel.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: hotelAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends hotelCountArgs>(
      args?: Subset<T, hotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__hotelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    images<T extends hotel$imagesArgs= {}>(args?: Subset<T, hotel$imagesArgs>): Prisma.PrismaPromise<Array<hotel_imagesGetPayload<T>>| Null>;

    vendor<T extends vendorArgs= {}>(args?: Subset<T, vendorArgs>): Prisma__vendorClient<vendorGetPayload<T> | Null>;

    rooms<T extends hotel$roomsArgs= {}>(args?: Subset<T, hotel$roomsArgs>): Prisma.PrismaPromise<Array<roomGetPayload<T>>| Null>;

    order<T extends hotel$orderArgs= {}>(args?: Subset<T, hotel$orderArgs>): Prisma.PrismaPromise<Array<orderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * hotel base type for findUnique actions
   */
  export type hotelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
    /**
     * Filter, which hotel to fetch.
     */
    where: hotelWhereUniqueInput
  }

  /**
   * hotel findUnique
   */
  export interface hotelFindUniqueArgs extends hotelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * hotel findUniqueOrThrow
   */
  export type hotelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
    /**
     * Filter, which hotel to fetch.
     */
    where: hotelWhereUniqueInput
  }


  /**
   * hotel base type for findFirst actions
   */
  export type hotelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
    /**
     * Filter, which hotel to fetch.
     */
    where?: hotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotels to fetch.
     */
    orderBy?: Enumerable<hotelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hotels.
     */
    cursor?: hotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hotels.
     */
    distinct?: Enumerable<HotelScalarFieldEnum>
  }

  /**
   * hotel findFirst
   */
  export interface hotelFindFirstArgs extends hotelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * hotel findFirstOrThrow
   */
  export type hotelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
    /**
     * Filter, which hotel to fetch.
     */
    where?: hotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotels to fetch.
     */
    orderBy?: Enumerable<hotelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hotels.
     */
    cursor?: hotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hotels.
     */
    distinct?: Enumerable<HotelScalarFieldEnum>
  }


  /**
   * hotel findMany
   */
  export type hotelFindManyArgs = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
    /**
     * Filter, which hotels to fetch.
     */
    where?: hotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotels to fetch.
     */
    orderBy?: Enumerable<hotelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hotels.
     */
    cursor?: hotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotels.
     */
    skip?: number
    distinct?: Enumerable<HotelScalarFieldEnum>
  }


  /**
   * hotel create
   */
  export type hotelCreateArgs = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
    /**
     * The data needed to create a hotel.
     */
    data: XOR<hotelCreateInput, hotelUncheckedCreateInput>
  }


  /**
   * hotel createMany
   */
  export type hotelCreateManyArgs = {
    /**
     * The data used to create many hotels.
     */
    data: Enumerable<hotelCreateManyInput>
  }


  /**
   * hotel update
   */
  export type hotelUpdateArgs = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
    /**
     * The data needed to update a hotel.
     */
    data: XOR<hotelUpdateInput, hotelUncheckedUpdateInput>
    /**
     * Choose, which hotel to update.
     */
    where: hotelWhereUniqueInput
  }


  /**
   * hotel updateMany
   */
  export type hotelUpdateManyArgs = {
    /**
     * The data used to update hotels.
     */
    data: XOR<hotelUpdateManyMutationInput, hotelUncheckedUpdateManyInput>
    /**
     * Filter which hotels to update
     */
    where?: hotelWhereInput
  }


  /**
   * hotel upsert
   */
  export type hotelUpsertArgs = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
    /**
     * The filter to search for the hotel to update in case it exists.
     */
    where: hotelWhereUniqueInput
    /**
     * In case the hotel found by the `where` argument doesn't exist, create a new hotel with this data.
     */
    create: XOR<hotelCreateInput, hotelUncheckedCreateInput>
    /**
     * In case the hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hotelUpdateInput, hotelUncheckedUpdateInput>
  }


  /**
   * hotel delete
   */
  export type hotelDeleteArgs = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
    /**
     * Filter which hotel to delete.
     */
    where: hotelWhereUniqueInput
  }


  /**
   * hotel deleteMany
   */
  export type hotelDeleteManyArgs = {
    /**
     * Filter which hotels to delete
     */
    where?: hotelWhereInput
  }


  /**
   * hotel findRaw
   */
  export type hotelFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * hotel aggregateRaw
   */
  export type hotelAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * hotel.images
   */
  export type hotel$imagesArgs = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    where?: hotel_imagesWhereInput
    orderBy?: Enumerable<hotel_imagesOrderByWithRelationInput>
    cursor?: hotel_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Hotel_imagesScalarFieldEnum>
  }


  /**
   * hotel.rooms
   */
  export type hotel$roomsArgs = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    where?: roomWhereInput
    orderBy?: Enumerable<roomOrderByWithRelationInput>
    cursor?: roomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * hotel.order
   */
  export type hotel$orderArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    where?: orderWhereInput
    orderBy?: Enumerable<orderOrderByWithRelationInput>
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * hotel without action
   */
  export type hotelArgs = {
    /**
     * Select specific fields to fetch from the hotel
     */
    select?: hotelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotelInclude | null
  }



  /**
   * Model hotel_images
   */


  export type AggregateHotel_images = {
    _count: Hotel_imagesCountAggregateOutputType | null
    _min: Hotel_imagesMinAggregateOutputType | null
    _max: Hotel_imagesMaxAggregateOutputType | null
  }

  export type Hotel_imagesMinAggregateOutputType = {
    id: string | null
    hotel_id: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hotel_imagesMaxAggregateOutputType = {
    id: string | null
    hotel_id: string | null
    image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Hotel_imagesCountAggregateOutputType = {
    id: number
    hotel_id: number
    image: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Hotel_imagesMinAggregateInputType = {
    id?: true
    hotel_id?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type Hotel_imagesMaxAggregateInputType = {
    id?: true
    hotel_id?: true
    image?: true
    created_at?: true
    updated_at?: true
  }

  export type Hotel_imagesCountAggregateInputType = {
    id?: true
    hotel_id?: true
    image?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Hotel_imagesAggregateArgs = {
    /**
     * Filter which hotel_images to aggregate.
     */
    where?: hotel_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotel_images to fetch.
     */
    orderBy?: Enumerable<hotel_imagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hotel_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotel_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotel_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hotel_images
    **/
    _count?: true | Hotel_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hotel_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hotel_imagesMaxAggregateInputType
  }

  export type GetHotel_imagesAggregateType<T extends Hotel_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel_images[P]>
      : GetScalarType<T[P], AggregateHotel_images[P]>
  }




  export type Hotel_imagesGroupByArgs = {
    where?: hotel_imagesWhereInput
    orderBy?: Enumerable<hotel_imagesOrderByWithAggregationInput>
    by: Hotel_imagesScalarFieldEnum[]
    having?: hotel_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hotel_imagesCountAggregateInputType | true
    _min?: Hotel_imagesMinAggregateInputType
    _max?: Hotel_imagesMaxAggregateInputType
  }


  export type Hotel_imagesGroupByOutputType = {
    id: string
    hotel_id: string
    image: string
    created_at: Date
    updated_at: Date
    _count: Hotel_imagesCountAggregateOutputType | null
    _min: Hotel_imagesMinAggregateOutputType | null
    _max: Hotel_imagesMaxAggregateOutputType | null
  }

  type GetHotel_imagesGroupByPayload<T extends Hotel_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Hotel_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hotel_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hotel_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Hotel_imagesGroupByOutputType[P]>
        }
      >
    >


  export type hotel_imagesSelect = {
    id?: boolean
    hotel_id?: boolean
    image?: boolean
    created_at?: boolean
    updated_at?: boolean
    hotel?: boolean | hotelArgs
  }


  export type hotel_imagesInclude = {
    hotel?: boolean | hotelArgs
  }

  export type hotel_imagesGetPayload<S extends boolean | null | undefined | hotel_imagesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? hotel_images :
    S extends undefined ? never :
    S extends { include: any } & (hotel_imagesArgs | hotel_imagesFindManyArgs)
    ? hotel_images  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'hotel' ? hotelGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (hotel_imagesArgs | hotel_imagesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'hotel' ? hotelGetPayload<S['select'][P]> :  P extends keyof hotel_images ? hotel_images[P] : never
  } 
      : hotel_images


  type hotel_imagesCountArgs = 
    Omit<hotel_imagesFindManyArgs, 'select' | 'include'> & {
      select?: Hotel_imagesCountAggregateInputType | true
    }

  export interface hotel_imagesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Hotel_images that matches the filter.
     * @param {hotel_imagesFindUniqueArgs} args - Arguments to find a Hotel_images
     * @example
     * // Get one Hotel_images
     * const hotel_images = await prisma.hotel_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends hotel_imagesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, hotel_imagesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'hotel_images'> extends True ? Prisma__hotel_imagesClient<hotel_imagesGetPayload<T>> : Prisma__hotel_imagesClient<hotel_imagesGetPayload<T> | null, null>

    /**
     * Find one Hotel_images that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {hotel_imagesFindUniqueOrThrowArgs} args - Arguments to find a Hotel_images
     * @example
     * // Get one Hotel_images
     * const hotel_images = await prisma.hotel_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends hotel_imagesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, hotel_imagesFindUniqueOrThrowArgs>
    ): Prisma__hotel_imagesClient<hotel_imagesGetPayload<T>>

    /**
     * Find the first Hotel_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotel_imagesFindFirstArgs} args - Arguments to find a Hotel_images
     * @example
     * // Get one Hotel_images
     * const hotel_images = await prisma.hotel_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends hotel_imagesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, hotel_imagesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'hotel_images'> extends True ? Prisma__hotel_imagesClient<hotel_imagesGetPayload<T>> : Prisma__hotel_imagesClient<hotel_imagesGetPayload<T> | null, null>

    /**
     * Find the first Hotel_images that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotel_imagesFindFirstOrThrowArgs} args - Arguments to find a Hotel_images
     * @example
     * // Get one Hotel_images
     * const hotel_images = await prisma.hotel_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends hotel_imagesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, hotel_imagesFindFirstOrThrowArgs>
    ): Prisma__hotel_imagesClient<hotel_imagesGetPayload<T>>

    /**
     * Find zero or more Hotel_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotel_imagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotel_images
     * const hotel_images = await prisma.hotel_images.findMany()
     * 
     * // Get first 10 Hotel_images
     * const hotel_images = await prisma.hotel_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotel_imagesWithIdOnly = await prisma.hotel_images.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends hotel_imagesFindManyArgs>(
      args?: SelectSubset<T, hotel_imagesFindManyArgs>
    ): Prisma.PrismaPromise<Array<hotel_imagesGetPayload<T>>>

    /**
     * Create a Hotel_images.
     * @param {hotel_imagesCreateArgs} args - Arguments to create a Hotel_images.
     * @example
     * // Create one Hotel_images
     * const Hotel_images = await prisma.hotel_images.create({
     *   data: {
     *     // ... data to create a Hotel_images
     *   }
     * })
     * 
    **/
    create<T extends hotel_imagesCreateArgs>(
      args: SelectSubset<T, hotel_imagesCreateArgs>
    ): Prisma__hotel_imagesClient<hotel_imagesGetPayload<T>>

    /**
     * Create many Hotel_images.
     *     @param {hotel_imagesCreateManyArgs} args - Arguments to create many Hotel_images.
     *     @example
     *     // Create many Hotel_images
     *     const hotel_images = await prisma.hotel_images.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends hotel_imagesCreateManyArgs>(
      args?: SelectSubset<T, hotel_imagesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hotel_images.
     * @param {hotel_imagesDeleteArgs} args - Arguments to delete one Hotel_images.
     * @example
     * // Delete one Hotel_images
     * const Hotel_images = await prisma.hotel_images.delete({
     *   where: {
     *     // ... filter to delete one Hotel_images
     *   }
     * })
     * 
    **/
    delete<T extends hotel_imagesDeleteArgs>(
      args: SelectSubset<T, hotel_imagesDeleteArgs>
    ): Prisma__hotel_imagesClient<hotel_imagesGetPayload<T>>

    /**
     * Update one Hotel_images.
     * @param {hotel_imagesUpdateArgs} args - Arguments to update one Hotel_images.
     * @example
     * // Update one Hotel_images
     * const hotel_images = await prisma.hotel_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends hotel_imagesUpdateArgs>(
      args: SelectSubset<T, hotel_imagesUpdateArgs>
    ): Prisma__hotel_imagesClient<hotel_imagesGetPayload<T>>

    /**
     * Delete zero or more Hotel_images.
     * @param {hotel_imagesDeleteManyArgs} args - Arguments to filter Hotel_images to delete.
     * @example
     * // Delete a few Hotel_images
     * const { count } = await prisma.hotel_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends hotel_imagesDeleteManyArgs>(
      args?: SelectSubset<T, hotel_imagesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotel_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotel_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotel_images
     * const hotel_images = await prisma.hotel_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends hotel_imagesUpdateManyArgs>(
      args: SelectSubset<T, hotel_imagesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hotel_images.
     * @param {hotel_imagesUpsertArgs} args - Arguments to update or create a Hotel_images.
     * @example
     * // Update or create a Hotel_images
     * const hotel_images = await prisma.hotel_images.upsert({
     *   create: {
     *     // ... data to create a Hotel_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel_images we want to update
     *   }
     * })
    **/
    upsert<T extends hotel_imagesUpsertArgs>(
      args: SelectSubset<T, hotel_imagesUpsertArgs>
    ): Prisma__hotel_imagesClient<hotel_imagesGetPayload<T>>

    /**
     * Find zero or more Hotel_images that matches the filter.
     * @param {hotel_imagesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hotel_images = await prisma.hotel_images.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: hotel_imagesFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Hotel_images.
     * @param {hotel_imagesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hotel_images = await prisma.hotel_images.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: hotel_imagesAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Hotel_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hotel_imagesCountArgs} args - Arguments to filter Hotel_images to count.
     * @example
     * // Count the number of Hotel_images
     * const count = await prisma.hotel_images.count({
     *   where: {
     *     // ... the filter for the Hotel_images we want to count
     *   }
     * })
    **/
    count<T extends hotel_imagesCountArgs>(
      args?: Subset<T, hotel_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hotel_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hotel_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hotel_imagesAggregateArgs>(args: Subset<T, Hotel_imagesAggregateArgs>): Prisma.PrismaPromise<GetHotel_imagesAggregateType<T>>

    /**
     * Group by Hotel_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hotel_imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Hotel_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Hotel_imagesGroupByArgs['orderBy'] }
        : { orderBy?: Hotel_imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Hotel_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotel_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for hotel_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__hotel_imagesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    hotel<T extends hotelArgs= {}>(args?: Subset<T, hotelArgs>): Prisma__hotelClient<hotelGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * hotel_images base type for findUnique actions
   */
  export type hotel_imagesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    /**
     * Filter, which hotel_images to fetch.
     */
    where: hotel_imagesWhereUniqueInput
  }

  /**
   * hotel_images findUnique
   */
  export interface hotel_imagesFindUniqueArgs extends hotel_imagesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * hotel_images findUniqueOrThrow
   */
  export type hotel_imagesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    /**
     * Filter, which hotel_images to fetch.
     */
    where: hotel_imagesWhereUniqueInput
  }


  /**
   * hotel_images base type for findFirst actions
   */
  export type hotel_imagesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    /**
     * Filter, which hotel_images to fetch.
     */
    where?: hotel_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotel_images to fetch.
     */
    orderBy?: Enumerable<hotel_imagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hotel_images.
     */
    cursor?: hotel_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotel_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotel_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hotel_images.
     */
    distinct?: Enumerable<Hotel_imagesScalarFieldEnum>
  }

  /**
   * hotel_images findFirst
   */
  export interface hotel_imagesFindFirstArgs extends hotel_imagesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * hotel_images findFirstOrThrow
   */
  export type hotel_imagesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    /**
     * Filter, which hotel_images to fetch.
     */
    where?: hotel_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotel_images to fetch.
     */
    orderBy?: Enumerable<hotel_imagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hotel_images.
     */
    cursor?: hotel_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotel_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotel_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hotel_images.
     */
    distinct?: Enumerable<Hotel_imagesScalarFieldEnum>
  }


  /**
   * hotel_images findMany
   */
  export type hotel_imagesFindManyArgs = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    /**
     * Filter, which hotel_images to fetch.
     */
    where?: hotel_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hotel_images to fetch.
     */
    orderBy?: Enumerable<hotel_imagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hotel_images.
     */
    cursor?: hotel_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hotel_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hotel_images.
     */
    skip?: number
    distinct?: Enumerable<Hotel_imagesScalarFieldEnum>
  }


  /**
   * hotel_images create
   */
  export type hotel_imagesCreateArgs = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    /**
     * The data needed to create a hotel_images.
     */
    data: XOR<hotel_imagesCreateInput, hotel_imagesUncheckedCreateInput>
  }


  /**
   * hotel_images createMany
   */
  export type hotel_imagesCreateManyArgs = {
    /**
     * The data used to create many hotel_images.
     */
    data: Enumerable<hotel_imagesCreateManyInput>
  }


  /**
   * hotel_images update
   */
  export type hotel_imagesUpdateArgs = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    /**
     * The data needed to update a hotel_images.
     */
    data: XOR<hotel_imagesUpdateInput, hotel_imagesUncheckedUpdateInput>
    /**
     * Choose, which hotel_images to update.
     */
    where: hotel_imagesWhereUniqueInput
  }


  /**
   * hotel_images updateMany
   */
  export type hotel_imagesUpdateManyArgs = {
    /**
     * The data used to update hotel_images.
     */
    data: XOR<hotel_imagesUpdateManyMutationInput, hotel_imagesUncheckedUpdateManyInput>
    /**
     * Filter which hotel_images to update
     */
    where?: hotel_imagesWhereInput
  }


  /**
   * hotel_images upsert
   */
  export type hotel_imagesUpsertArgs = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    /**
     * The filter to search for the hotel_images to update in case it exists.
     */
    where: hotel_imagesWhereUniqueInput
    /**
     * In case the hotel_images found by the `where` argument doesn't exist, create a new hotel_images with this data.
     */
    create: XOR<hotel_imagesCreateInput, hotel_imagesUncheckedCreateInput>
    /**
     * In case the hotel_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hotel_imagesUpdateInput, hotel_imagesUncheckedUpdateInput>
  }


  /**
   * hotel_images delete
   */
  export type hotel_imagesDeleteArgs = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
    /**
     * Filter which hotel_images to delete.
     */
    where: hotel_imagesWhereUniqueInput
  }


  /**
   * hotel_images deleteMany
   */
  export type hotel_imagesDeleteManyArgs = {
    /**
     * Filter which hotel_images to delete
     */
    where?: hotel_imagesWhereInput
  }


  /**
   * hotel_images findRaw
   */
  export type hotel_imagesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * hotel_images aggregateRaw
   */
  export type hotel_imagesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * hotel_images without action
   */
  export type hotel_imagesArgs = {
    /**
     * Select specific fields to fetch from the hotel_images
     */
    select?: hotel_imagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hotel_imagesInclude | null
  }



  /**
   * Model room
   */


  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    max_pet: number | null
    price: number | null
  }

  export type RoomSumAggregateOutputType = {
    max_pet: number | null
    price: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    hotel_id: string | null
    name: string | null
    image: string | null
    description: string | null
    max_pet: number | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    hotel_id: string | null
    name: string | null
    image: string | null
    description: string | null
    max_pet: number | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    hotel_id: number
    name: number
    image: number
    description: number
    max_pet: number
    price: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    max_pet?: true
    price?: true
  }

  export type RoomSumAggregateInputType = {
    max_pet?: true
    price?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    hotel_id?: true
    name?: true
    image?: true
    description?: true
    max_pet?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    hotel_id?: true
    name?: true
    image?: true
    description?: true
    max_pet?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    hotel_id?: true
    name?: true
    image?: true
    description?: true
    max_pet?: true
    price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoomAggregateArgs = {
    /**
     * Filter which room to aggregate.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: Enumerable<roomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs = {
    where?: roomWhereInput
    orderBy?: Enumerable<roomOrderByWithAggregationInput>
    by: RoomScalarFieldEnum[]
    having?: roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }


  export type RoomGroupByOutputType = {
    id: string
    hotel_id: string
    name: string
    image: string
    description: string
    max_pet: number
    price: number
    created_at: Date
    updated_at: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type roomSelect = {
    id?: boolean
    hotel_id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    max_pet?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    hotel?: boolean | hotelArgs
    order?: boolean | room$orderArgs
    _count?: boolean | RoomCountOutputTypeArgs
  }


  export type roomInclude = {
    hotel?: boolean | hotelArgs
    order?: boolean | room$orderArgs
    _count?: boolean | RoomCountOutputTypeArgs
  }

  export type roomGetPayload<S extends boolean | null | undefined | roomArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? room :
    S extends undefined ? never :
    S extends { include: any } & (roomArgs | roomFindManyArgs)
    ? room  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'hotel' ? hotelGetPayload<S['include'][P]> :
        P extends 'order' ? Array < orderGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (roomArgs | roomFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'hotel' ? hotelGetPayload<S['select'][P]> :
        P extends 'order' ? Array < orderGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoomCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof room ? room[P] : never
  } 
      : room


  type roomCountArgs = 
    Omit<roomFindManyArgs, 'select' | 'include'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface roomDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Room that matches the filter.
     * @param {roomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends roomFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, roomFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'room'> extends True ? Prisma__roomClient<roomGetPayload<T>> : Prisma__roomClient<roomGetPayload<T> | null, null>

    /**
     * Find one Room that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {roomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends roomFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, roomFindUniqueOrThrowArgs>
    ): Prisma__roomClient<roomGetPayload<T>>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends roomFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, roomFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'room'> extends True ? Prisma__roomClient<roomGetPayload<T>> : Prisma__roomClient<roomGetPayload<T> | null, null>

    /**
     * Find the first Room that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends roomFindFirstOrThrowArgs>(
      args?: SelectSubset<T, roomFindFirstOrThrowArgs>
    ): Prisma__roomClient<roomGetPayload<T>>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends roomFindManyArgs>(
      args?: SelectSubset<T, roomFindManyArgs>
    ): Prisma.PrismaPromise<Array<roomGetPayload<T>>>

    /**
     * Create a Room.
     * @param {roomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
    **/
    create<T extends roomCreateArgs>(
      args: SelectSubset<T, roomCreateArgs>
    ): Prisma__roomClient<roomGetPayload<T>>

    /**
     * Create many Rooms.
     *     @param {roomCreateManyArgs} args - Arguments to create many Rooms.
     *     @example
     *     // Create many Rooms
     *     const room = await prisma.room.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends roomCreateManyArgs>(
      args?: SelectSubset<T, roomCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {roomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
    **/
    delete<T extends roomDeleteArgs>(
      args: SelectSubset<T, roomDeleteArgs>
    ): Prisma__roomClient<roomGetPayload<T>>

    /**
     * Update one Room.
     * @param {roomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends roomUpdateArgs>(
      args: SelectSubset<T, roomUpdateArgs>
    ): Prisma__roomClient<roomGetPayload<T>>

    /**
     * Delete zero or more Rooms.
     * @param {roomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends roomDeleteManyArgs>(
      args?: SelectSubset<T, roomDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends roomUpdateManyArgs>(
      args: SelectSubset<T, roomUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {roomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
    **/
    upsert<T extends roomUpsertArgs>(
      args: SelectSubset<T, roomUpsertArgs>
    ): Prisma__roomClient<roomGetPayload<T>>

    /**
     * Find zero or more Rooms that matches the filter.
     * @param {roomFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const room = await prisma.room.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: roomFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Room.
     * @param {roomAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const room = await prisma.room.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: roomAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomCountArgs>(
      args?: Subset<T, roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__roomClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    hotel<T extends hotelArgs= {}>(args?: Subset<T, hotelArgs>): Prisma__hotelClient<hotelGetPayload<T> | Null>;

    order<T extends room$orderArgs= {}>(args?: Subset<T, room$orderArgs>): Prisma.PrismaPromise<Array<orderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * room base type for findUnique actions
   */
  export type roomFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findUnique
   */
  export interface roomFindUniqueArgs extends roomFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * room findUniqueOrThrow
   */
  export type roomFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }


  /**
   * room base type for findFirst actions
   */
  export type roomFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: Enumerable<roomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: Enumerable<RoomScalarFieldEnum>
  }

  /**
   * room findFirst
   */
  export interface roomFindFirstArgs extends roomFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * room findFirstOrThrow
   */
  export type roomFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: Enumerable<roomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * room findMany
   */
  export type roomFindManyArgs = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: Enumerable<roomOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: Enumerable<RoomScalarFieldEnum>
  }


  /**
   * room create
   */
  export type roomCreateArgs = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    /**
     * The data needed to create a room.
     */
    data: XOR<roomCreateInput, roomUncheckedCreateInput>
  }


  /**
   * room createMany
   */
  export type roomCreateManyArgs = {
    /**
     * The data used to create many rooms.
     */
    data: Enumerable<roomCreateManyInput>
  }


  /**
   * room update
   */
  export type roomUpdateArgs = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    /**
     * The data needed to update a room.
     */
    data: XOR<roomUpdateInput, roomUncheckedUpdateInput>
    /**
     * Choose, which room to update.
     */
    where: roomWhereUniqueInput
  }


  /**
   * room updateMany
   */
  export type roomUpdateManyArgs = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomWhereInput
  }


  /**
   * room upsert
   */
  export type roomUpsertArgs = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    /**
     * The filter to search for the room to update in case it exists.
     */
    where: roomWhereUniqueInput
    /**
     * In case the room found by the `where` argument doesn't exist, create a new room with this data.
     */
    create: XOR<roomCreateInput, roomUncheckedCreateInput>
    /**
     * In case the room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomUpdateInput, roomUncheckedUpdateInput>
  }


  /**
   * room delete
   */
  export type roomDeleteArgs = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
    /**
     * Filter which room to delete.
     */
    where: roomWhereUniqueInput
  }


  /**
   * room deleteMany
   */
  export type roomDeleteManyArgs = {
    /**
     * Filter which rooms to delete
     */
    where?: roomWhereInput
  }


  /**
   * room findRaw
   */
  export type roomFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * room aggregateRaw
   */
  export type roomAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * room.order
   */
  export type room$orderArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    where?: orderWhereInput
    orderBy?: Enumerable<orderOrderByWithRelationInput>
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * room without action
   */
  export type roomArgs = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roomInclude | null
  }



  /**
   * Model authentication
   */


  export type AggregateAuthentication = {
    _count: AuthenticationCountAggregateOutputType | null
    _min: AuthenticationMinAggregateOutputType | null
    _max: AuthenticationMaxAggregateOutputType | null
  }

  export type AuthenticationMinAggregateOutputType = {
    id: string | null
    ref_id: string | null
    ref_table: string | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuthenticationMaxAggregateOutputType = {
    id: string | null
    ref_id: string | null
    ref_table: string | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AuthenticationCountAggregateOutputType = {
    id: number
    ref_id: number
    ref_table: number
    token: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AuthenticationMinAggregateInputType = {
    id?: true
    ref_id?: true
    ref_table?: true
    token?: true
    created_at?: true
    updated_at?: true
  }

  export type AuthenticationMaxAggregateInputType = {
    id?: true
    ref_id?: true
    ref_table?: true
    token?: true
    created_at?: true
    updated_at?: true
  }

  export type AuthenticationCountAggregateInputType = {
    id?: true
    ref_id?: true
    ref_table?: true
    token?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AuthenticationAggregateArgs = {
    /**
     * Filter which authentication to aggregate.
     */
    where?: authenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: Enumerable<authenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authentications
    **/
    _count?: true | AuthenticationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticationMaxAggregateInputType
  }

  export type GetAuthenticationAggregateType<T extends AuthenticationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthentication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthentication[P]>
      : GetScalarType<T[P], AggregateAuthentication[P]>
  }




  export type AuthenticationGroupByArgs = {
    where?: authenticationWhereInput
    orderBy?: Enumerable<authenticationOrderByWithAggregationInput>
    by: AuthenticationScalarFieldEnum[]
    having?: authenticationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticationCountAggregateInputType | true
    _min?: AuthenticationMinAggregateInputType
    _max?: AuthenticationMaxAggregateInputType
  }


  export type AuthenticationGroupByOutputType = {
    id: string
    ref_id: string
    ref_table: string
    token: string
    created_at: Date
    updated_at: Date
    _count: AuthenticationCountAggregateOutputType | null
    _min: AuthenticationMinAggregateOutputType | null
    _max: AuthenticationMaxAggregateOutputType | null
  }

  type GetAuthenticationGroupByPayload<T extends AuthenticationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AuthenticationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticationGroupByOutputType[P]>
        }
      >
    >


  export type authenticationSelect = {
    id?: boolean
    ref_id?: boolean
    ref_table?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type authenticationGetPayload<S extends boolean | null | undefined | authenticationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? authentication :
    S extends undefined ? never :
    S extends { include: any } & (authenticationArgs | authenticationFindManyArgs)
    ? authentication 
    : S extends { select: any } & (authenticationArgs | authenticationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof authentication ? authentication[P] : never
  } 
      : authentication


  type authenticationCountArgs = 
    Omit<authenticationFindManyArgs, 'select' | 'include'> & {
      select?: AuthenticationCountAggregateInputType | true
    }

  export interface authenticationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Authentication that matches the filter.
     * @param {authenticationFindUniqueArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends authenticationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, authenticationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'authentication'> extends True ? Prisma__authenticationClient<authenticationGetPayload<T>> : Prisma__authenticationClient<authenticationGetPayload<T> | null, null>

    /**
     * Find one Authentication that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {authenticationFindUniqueOrThrowArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends authenticationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, authenticationFindUniqueOrThrowArgs>
    ): Prisma__authenticationClient<authenticationGetPayload<T>>

    /**
     * Find the first Authentication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationFindFirstArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends authenticationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, authenticationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'authentication'> extends True ? Prisma__authenticationClient<authenticationGetPayload<T>> : Prisma__authenticationClient<authenticationGetPayload<T> | null, null>

    /**
     * Find the first Authentication that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationFindFirstOrThrowArgs} args - Arguments to find a Authentication
     * @example
     * // Get one Authentication
     * const authentication = await prisma.authentication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends authenticationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, authenticationFindFirstOrThrowArgs>
    ): Prisma__authenticationClient<authenticationGetPayload<T>>

    /**
     * Find zero or more Authentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authentications
     * const authentications = await prisma.authentication.findMany()
     * 
     * // Get first 10 Authentications
     * const authentications = await prisma.authentication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authenticationWithIdOnly = await prisma.authentication.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends authenticationFindManyArgs>(
      args?: SelectSubset<T, authenticationFindManyArgs>
    ): Prisma.PrismaPromise<Array<authenticationGetPayload<T>>>

    /**
     * Create a Authentication.
     * @param {authenticationCreateArgs} args - Arguments to create a Authentication.
     * @example
     * // Create one Authentication
     * const Authentication = await prisma.authentication.create({
     *   data: {
     *     // ... data to create a Authentication
     *   }
     * })
     * 
    **/
    create<T extends authenticationCreateArgs>(
      args: SelectSubset<T, authenticationCreateArgs>
    ): Prisma__authenticationClient<authenticationGetPayload<T>>

    /**
     * Create many Authentications.
     *     @param {authenticationCreateManyArgs} args - Arguments to create many Authentications.
     *     @example
     *     // Create many Authentications
     *     const authentication = await prisma.authentication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends authenticationCreateManyArgs>(
      args?: SelectSubset<T, authenticationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Authentication.
     * @param {authenticationDeleteArgs} args - Arguments to delete one Authentication.
     * @example
     * // Delete one Authentication
     * const Authentication = await prisma.authentication.delete({
     *   where: {
     *     // ... filter to delete one Authentication
     *   }
     * })
     * 
    **/
    delete<T extends authenticationDeleteArgs>(
      args: SelectSubset<T, authenticationDeleteArgs>
    ): Prisma__authenticationClient<authenticationGetPayload<T>>

    /**
     * Update one Authentication.
     * @param {authenticationUpdateArgs} args - Arguments to update one Authentication.
     * @example
     * // Update one Authentication
     * const authentication = await prisma.authentication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends authenticationUpdateArgs>(
      args: SelectSubset<T, authenticationUpdateArgs>
    ): Prisma__authenticationClient<authenticationGetPayload<T>>

    /**
     * Delete zero or more Authentications.
     * @param {authenticationDeleteManyArgs} args - Arguments to filter Authentications to delete.
     * @example
     * // Delete a few Authentications
     * const { count } = await prisma.authentication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends authenticationDeleteManyArgs>(
      args?: SelectSubset<T, authenticationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authentications
     * const authentication = await prisma.authentication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends authenticationUpdateManyArgs>(
      args: SelectSubset<T, authenticationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Authentication.
     * @param {authenticationUpsertArgs} args - Arguments to update or create a Authentication.
     * @example
     * // Update or create a Authentication
     * const authentication = await prisma.authentication.upsert({
     *   create: {
     *     // ... data to create a Authentication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authentication we want to update
     *   }
     * })
    **/
    upsert<T extends authenticationUpsertArgs>(
      args: SelectSubset<T, authenticationUpsertArgs>
    ): Prisma__authenticationClient<authenticationGetPayload<T>>

    /**
     * Find zero or more Authentications that matches the filter.
     * @param {authenticationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const authentication = await prisma.authentication.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: authenticationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Authentication.
     * @param {authenticationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const authentication = await prisma.authentication.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: authenticationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Authentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authenticationCountArgs} args - Arguments to filter Authentications to count.
     * @example
     * // Count the number of Authentications
     * const count = await prisma.authentication.count({
     *   where: {
     *     // ... the filter for the Authentications we want to count
     *   }
     * })
    **/
    count<T extends authenticationCountArgs>(
      args?: Subset<T, authenticationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthenticationAggregateArgs>(args: Subset<T, AuthenticationAggregateArgs>): Prisma.PrismaPromise<GetAuthenticationAggregateType<T>>

    /**
     * Group by Authentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthenticationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticationGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthenticationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for authentication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__authenticationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * authentication base type for findUnique actions
   */
  export type authenticationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
    /**
     * Filter, which authentication to fetch.
     */
    where: authenticationWhereUniqueInput
  }

  /**
   * authentication findUnique
   */
  export interface authenticationFindUniqueArgs extends authenticationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * authentication findUniqueOrThrow
   */
  export type authenticationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
    /**
     * Filter, which authentication to fetch.
     */
    where: authenticationWhereUniqueInput
  }


  /**
   * authentication base type for findFirst actions
   */
  export type authenticationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
    /**
     * Filter, which authentication to fetch.
     */
    where?: authenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: Enumerable<authenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentications.
     */
    cursor?: authenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentications.
     */
    distinct?: Enumerable<AuthenticationScalarFieldEnum>
  }

  /**
   * authentication findFirst
   */
  export interface authenticationFindFirstArgs extends authenticationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * authentication findFirstOrThrow
   */
  export type authenticationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
    /**
     * Filter, which authentication to fetch.
     */
    where?: authenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: Enumerable<authenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authentications.
     */
    cursor?: authenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authentications.
     */
    distinct?: Enumerable<AuthenticationScalarFieldEnum>
  }


  /**
   * authentication findMany
   */
  export type authenticationFindManyArgs = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
    /**
     * Filter, which authentications to fetch.
     */
    where?: authenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authentications to fetch.
     */
    orderBy?: Enumerable<authenticationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authentications.
     */
    cursor?: authenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authentications.
     */
    skip?: number
    distinct?: Enumerable<AuthenticationScalarFieldEnum>
  }


  /**
   * authentication create
   */
  export type authenticationCreateArgs = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
    /**
     * The data needed to create a authentication.
     */
    data: XOR<authenticationCreateInput, authenticationUncheckedCreateInput>
  }


  /**
   * authentication createMany
   */
  export type authenticationCreateManyArgs = {
    /**
     * The data used to create many authentications.
     */
    data: Enumerable<authenticationCreateManyInput>
  }


  /**
   * authentication update
   */
  export type authenticationUpdateArgs = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
    /**
     * The data needed to update a authentication.
     */
    data: XOR<authenticationUpdateInput, authenticationUncheckedUpdateInput>
    /**
     * Choose, which authentication to update.
     */
    where: authenticationWhereUniqueInput
  }


  /**
   * authentication updateMany
   */
  export type authenticationUpdateManyArgs = {
    /**
     * The data used to update authentications.
     */
    data: XOR<authenticationUpdateManyMutationInput, authenticationUncheckedUpdateManyInput>
    /**
     * Filter which authentications to update
     */
    where?: authenticationWhereInput
  }


  /**
   * authentication upsert
   */
  export type authenticationUpsertArgs = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
    /**
     * The filter to search for the authentication to update in case it exists.
     */
    where: authenticationWhereUniqueInput
    /**
     * In case the authentication found by the `where` argument doesn't exist, create a new authentication with this data.
     */
    create: XOR<authenticationCreateInput, authenticationUncheckedCreateInput>
    /**
     * In case the authentication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authenticationUpdateInput, authenticationUncheckedUpdateInput>
  }


  /**
   * authentication delete
   */
  export type authenticationDeleteArgs = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
    /**
     * Filter which authentication to delete.
     */
    where: authenticationWhereUniqueInput
  }


  /**
   * authentication deleteMany
   */
  export type authenticationDeleteManyArgs = {
    /**
     * Filter which authentications to delete
     */
    where?: authenticationWhereInput
  }


  /**
   * authentication findRaw
   */
  export type authenticationFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * authentication aggregateRaw
   */
  export type authenticationAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * authentication without action
   */
  export type authenticationArgs = {
    /**
     * Select specific fields to fetch from the authentication
     */
    select?: authenticationSelect | null
  }



  /**
   * Model image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    image: string | null
    ref_id: string | null
    ref_table: string | null
    ref_column: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    image: string | null
    ref_id: string | null
    ref_table: string | null
    ref_column: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    image: number
    ref_id: number
    ref_table: number
    ref_column: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    image?: true
    ref_id?: true
    ref_table?: true
    ref_column?: true
    created_at?: true
    updated_at?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    image?: true
    ref_id?: true
    ref_table?: true
    ref_column?: true
    created_at?: true
    updated_at?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    image?: true
    ref_id?: true
    ref_table?: true
    ref_column?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ImageAggregateArgs = {
    /**
     * Filter which image to aggregate.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: Enumerable<imageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs = {
    where?: imageWhereInput
    orderBy?: Enumerable<imageOrderByWithAggregationInput>
    by: ImageScalarFieldEnum[]
    having?: imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    id: string
    image: string
    ref_id: string
    ref_table: string
    ref_column: string
    created_at: Date
    updated_at: Date
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type imageSelect = {
    id?: boolean
    image?: boolean
    ref_id?: boolean
    ref_table?: boolean
    ref_column?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type imageGetPayload<S extends boolean | null | undefined | imageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? image :
    S extends undefined ? never :
    S extends { include: any } & (imageArgs | imageFindManyArgs)
    ? image 
    : S extends { select: any } & (imageArgs | imageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof image ? image[P] : never
  } 
      : image


  type imageCountArgs = 
    Omit<imageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface imageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Image that matches the filter.
     * @param {imageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends imageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, imageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'image'> extends True ? Prisma__imageClient<imageGetPayload<T>> : Prisma__imageClient<imageGetPayload<T> | null, null>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {imageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends imageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, imageFindUniqueOrThrowArgs>
    ): Prisma__imageClient<imageGetPayload<T>>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends imageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, imageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'image'> extends True ? Prisma__imageClient<imageGetPayload<T>> : Prisma__imageClient<imageGetPayload<T> | null, null>

    /**
     * Find the first Image that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends imageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, imageFindFirstOrThrowArgs>
    ): Prisma__imageClient<imageGetPayload<T>>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends imageFindManyArgs>(
      args?: SelectSubset<T, imageFindManyArgs>
    ): Prisma.PrismaPromise<Array<imageGetPayload<T>>>

    /**
     * Create a Image.
     * @param {imageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends imageCreateArgs>(
      args: SelectSubset<T, imageCreateArgs>
    ): Prisma__imageClient<imageGetPayload<T>>

    /**
     * Create many Images.
     *     @param {imageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends imageCreateManyArgs>(
      args?: SelectSubset<T, imageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {imageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends imageDeleteArgs>(
      args: SelectSubset<T, imageDeleteArgs>
    ): Prisma__imageClient<imageGetPayload<T>>

    /**
     * Update one Image.
     * @param {imageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends imageUpdateArgs>(
      args: SelectSubset<T, imageUpdateArgs>
    ): Prisma__imageClient<imageGetPayload<T>>

    /**
     * Delete zero or more Images.
     * @param {imageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends imageDeleteManyArgs>(
      args?: SelectSubset<T, imageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends imageUpdateManyArgs>(
      args: SelectSubset<T, imageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {imageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends imageUpsertArgs>(
      args: SelectSubset<T, imageUpsertArgs>
    ): Prisma__imageClient<imageGetPayload<T>>

    /**
     * Find zero or more Images that matches the filter.
     * @param {imageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const image = await prisma.image.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: imageFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Image.
     * @param {imageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const image = await prisma.image.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: imageAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imageCountArgs>(
      args?: Subset<T, imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__imageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * image base type for findUnique actions
   */
  export type imageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image findUnique
   */
  export interface imageFindUniqueArgs extends imageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * image findUniqueOrThrow
   */
  export type imageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }


  /**
   * image base type for findFirst actions
   */
  export type imageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: Enumerable<imageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: Enumerable<ImageScalarFieldEnum>
  }

  /**
   * image findFirst
   */
  export interface imageFindFirstArgs extends imageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * image findFirstOrThrow
   */
  export type imageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: Enumerable<imageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * image findMany
   */
  export type imageFindManyArgs = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
    /**
     * Filter, which images to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: Enumerable<imageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * image create
   */
  export type imageCreateArgs = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
    /**
     * The data needed to create a image.
     */
    data: XOR<imageCreateInput, imageUncheckedCreateInput>
  }


  /**
   * image createMany
   */
  export type imageCreateManyArgs = {
    /**
     * The data used to create many images.
     */
    data: Enumerable<imageCreateManyInput>
  }


  /**
   * image update
   */
  export type imageUpdateArgs = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
    /**
     * The data needed to update a image.
     */
    data: XOR<imageUpdateInput, imageUncheckedUpdateInput>
    /**
     * Choose, which image to update.
     */
    where: imageWhereUniqueInput
  }


  /**
   * image updateMany
   */
  export type imageUpdateManyArgs = {
    /**
     * The data used to update images.
     */
    data: XOR<imageUpdateManyMutationInput, imageUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imageWhereInput
  }


  /**
   * image upsert
   */
  export type imageUpsertArgs = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
    /**
     * The filter to search for the image to update in case it exists.
     */
    where: imageWhereUniqueInput
    /**
     * In case the image found by the `where` argument doesn't exist, create a new image with this data.
     */
    create: XOR<imageCreateInput, imageUncheckedCreateInput>
    /**
     * In case the image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imageUpdateInput, imageUncheckedUpdateInput>
  }


  /**
   * image delete
   */
  export type imageDeleteArgs = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
    /**
     * Filter which image to delete.
     */
    where: imageWhereUniqueInput
  }


  /**
   * image deleteMany
   */
  export type imageDeleteManyArgs = {
    /**
     * Filter which images to delete
     */
    where?: imageWhereInput
  }


  /**
   * image findRaw
   */
  export type imageFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * image aggregateRaw
   */
  export type imageAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * image without action
   */
  export type imageArgs = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect | null
  }



  /**
   * Model city
   */


  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CityAggregateArgs = {
    /**
     * Filter which city to aggregate.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs = {
    where?: cityWhereInput
    orderBy?: Enumerable<cityOrderByWithAggregationInput>
    by: CityScalarFieldEnum[]
    having?: cityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }


  export type CityGroupByOutputType = {
    id: string
    name: string
    status: boolean
    created_at: Date
    updated_at: Date
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type citySelect = {
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type cityGetPayload<S extends boolean | null | undefined | cityArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? city :
    S extends undefined ? never :
    S extends { include: any } & (cityArgs | cityFindManyArgs)
    ? city 
    : S extends { select: any } & (cityArgs | cityFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof city ? city[P] : never
  } 
      : city


  type cityCountArgs = 
    Omit<cityFindManyArgs, 'select' | 'include'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface cityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one City that matches the filter.
     * @param {cityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cityFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cityFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'city'> extends True ? Prisma__cityClient<cityGetPayload<T>> : Prisma__cityClient<cityGetPayload<T> | null, null>

    /**
     * Find one City that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cityFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, cityFindUniqueOrThrowArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cityFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cityFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'city'> extends True ? Prisma__cityClient<cityGetPayload<T>> : Prisma__cityClient<cityGetPayload<T> | null, null>

    /**
     * Find the first City that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cityFindFirstOrThrowArgs>(
      args?: SelectSubset<T, cityFindFirstOrThrowArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cityFindManyArgs>(
      args?: SelectSubset<T, cityFindManyArgs>
    ): Prisma.PrismaPromise<Array<cityGetPayload<T>>>

    /**
     * Create a City.
     * @param {cityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
    **/
    create<T extends cityCreateArgs>(
      args: SelectSubset<T, cityCreateArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Create many Cities.
     *     @param {cityCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const city = await prisma.city.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cityCreateManyArgs>(
      args?: SelectSubset<T, cityCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {cityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
    **/
    delete<T extends cityDeleteArgs>(
      args: SelectSubset<T, cityDeleteArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Update one City.
     * @param {cityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cityUpdateArgs>(
      args: SelectSubset<T, cityUpdateArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Delete zero or more Cities.
     * @param {cityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cityDeleteManyArgs>(
      args?: SelectSubset<T, cityDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cityUpdateManyArgs>(
      args: SelectSubset<T, cityUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {cityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
    **/
    upsert<T extends cityUpsertArgs>(
      args: SelectSubset<T, cityUpsertArgs>
    ): Prisma__cityClient<cityGetPayload<T>>

    /**
     * Find zero or more Cities that matches the filter.
     * @param {cityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const city = await prisma.city.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: cityFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a City.
     * @param {cityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const city = await prisma.city.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: cityAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends cityCountArgs>(
      args?: Subset<T, cityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for city.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cityClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * city base type for findUnique actions
   */
  export type cityFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }

  /**
   * city findUnique
   */
  export interface cityFindUniqueArgs extends cityFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * city findUniqueOrThrow
   */
  export type cityFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Filter, which city to fetch.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city base type for findFirst actions
   */
  export type cityFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }

  /**
   * city findFirst
   */
  export interface cityFindFirstArgs extends cityFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * city findFirstOrThrow
   */
  export type cityFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Filter, which city to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * city findMany
   */
  export type cityFindManyArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Filter, which cities to fetch.
     */
    where?: cityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: Enumerable<cityOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: cityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: Enumerable<CityScalarFieldEnum>
  }


  /**
   * city create
   */
  export type cityCreateArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * The data needed to create a city.
     */
    data: XOR<cityCreateInput, cityUncheckedCreateInput>
  }


  /**
   * city createMany
   */
  export type cityCreateManyArgs = {
    /**
     * The data used to create many cities.
     */
    data: Enumerable<cityCreateManyInput>
  }


  /**
   * city update
   */
  export type cityUpdateArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * The data needed to update a city.
     */
    data: XOR<cityUpdateInput, cityUncheckedUpdateInput>
    /**
     * Choose, which city to update.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city updateMany
   */
  export type cityUpdateManyArgs = {
    /**
     * The data used to update cities.
     */
    data: XOR<cityUpdateManyMutationInput, cityUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: cityWhereInput
  }


  /**
   * city upsert
   */
  export type cityUpsertArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * The filter to search for the city to update in case it exists.
     */
    where: cityWhereUniqueInput
    /**
     * In case the city found by the `where` argument doesn't exist, create a new city with this data.
     */
    create: XOR<cityCreateInput, cityUncheckedCreateInput>
    /**
     * In case the city was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cityUpdateInput, cityUncheckedUpdateInput>
  }


  /**
   * city delete
   */
  export type cityDeleteArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
    /**
     * Filter which city to delete.
     */
    where: cityWhereUniqueInput
  }


  /**
   * city deleteMany
   */
  export type cityDeleteManyArgs = {
    /**
     * Filter which cities to delete
     */
    where?: cityWhereInput
  }


  /**
   * city findRaw
   */
  export type cityFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * city aggregateRaw
   */
  export type cityAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * city without action
   */
  export type cityArgs = {
    /**
     * Select specific fields to fetch from the city
     */
    select?: citySelect | null
  }



  /**
   * Model order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    status: number | null
    amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    status: number | null
    amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    hotel_id: string | null
    room_id: string | null
    user_id: string | null
    vendor_id: string | null
    start_date: Date | null
    end_date: Date | null
    status: number | null
    notes: string | null
    amount: number | null
    expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    hotel_id: string | null
    room_id: string | null
    user_id: string | null
    vendor_id: string | null
    start_date: Date | null
    end_date: Date | null
    status: number | null
    notes: string | null
    amount: number | null
    expired_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    hotel_id: number
    room_id: number
    user_id: number
    vendor_id: number
    start_date: number
    end_date: number
    status: number
    notes: number
    amount: number
    expired_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    status?: true
    amount?: true
  }

  export type OrderSumAggregateInputType = {
    status?: true
    amount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    hotel_id?: true
    room_id?: true
    user_id?: true
    vendor_id?: true
    start_date?: true
    end_date?: true
    status?: true
    notes?: true
    amount?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    hotel_id?: true
    room_id?: true
    user_id?: true
    vendor_id?: true
    start_date?: true
    end_date?: true
    status?: true
    notes?: true
    amount?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    hotel_id?: true
    room_id?: true
    user_id?: true
    vendor_id?: true
    start_date?: true
    end_date?: true
    status?: true
    notes?: true
    amount?: true
    expired_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<orderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs = {
    where?: orderWhereInput
    orderBy?: Enumerable<orderOrderByWithAggregationInput>
    by: OrderScalarFieldEnum[]
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: string
    hotel_id: string
    room_id: string
    user_id: string
    vendor_id: string
    start_date: Date
    end_date: Date
    status: number
    notes: string
    amount: number
    expired_at: Date
    created_at: Date
    updated_at: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect = {
    id?: boolean
    hotel_id?: boolean
    room_id?: boolean
    user_id?: boolean
    vendor_id?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    notes?: boolean
    amount?: boolean
    expired_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    animals?: boolean | order$animalsArgs
    user?: boolean | userArgs
    room?: boolean | roomArgs
    hotel?: boolean | hotelArgs
    vendor?: boolean | vendorArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }


  export type orderInclude = {
    animals?: boolean | order$animalsArgs
    user?: boolean | userArgs
    room?: boolean | roomArgs
    hotel?: boolean | hotelArgs
    vendor?: boolean | vendorArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }

  export type orderGetPayload<S extends boolean | null | undefined | orderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? order :
    S extends undefined ? never :
    S extends { include: any } & (orderArgs | orderFindManyArgs)
    ? order  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'animals' ? Array < animalGetPayload<S['include'][P]>>  :
        P extends 'user' ? userGetPayload<S['include'][P]> :
        P extends 'room' ? roomGetPayload<S['include'][P]> :
        P extends 'hotel' ? hotelGetPayload<S['include'][P]> :
        P extends 'vendor' ? vendorGetPayload<S['include'][P]> :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (orderArgs | orderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'animals' ? Array < animalGetPayload<S['select'][P]>>  :
        P extends 'user' ? userGetPayload<S['select'][P]> :
        P extends 'room' ? roomGetPayload<S['select'][P]> :
        P extends 'hotel' ? hotelGetPayload<S['select'][P]> :
        P extends 'vendor' ? vendorGetPayload<S['select'][P]> :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof order ? order[P] : never
  } 
      : order


  type orderCountArgs = 
    Omit<orderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends orderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, orderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'order'> extends True ? Prisma__orderClient<orderGetPayload<T>> : Prisma__orderClient<orderGetPayload<T> | null, null>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, orderFindUniqueOrThrowArgs>
    ): Prisma__orderClient<orderGetPayload<T>>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends orderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, orderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'order'> extends True ? Prisma__orderClient<orderGetPayload<T>> : Prisma__orderClient<orderGetPayload<T> | null, null>

    /**
     * Find the first Order that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, orderFindFirstOrThrowArgs>
    ): Prisma__orderClient<orderGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends orderFindManyArgs>(
      args?: SelectSubset<T, orderFindManyArgs>
    ): Prisma.PrismaPromise<Array<orderGetPayload<T>>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends orderCreateArgs>(
      args: SelectSubset<T, orderCreateArgs>
    ): Prisma__orderClient<orderGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {orderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends orderCreateManyArgs>(
      args?: SelectSubset<T, orderCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends orderDeleteArgs>(
      args: SelectSubset<T, orderDeleteArgs>
    ): Prisma__orderClient<orderGetPayload<T>>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends orderUpdateArgs>(
      args: SelectSubset<T, orderUpdateArgs>
    ): Prisma__orderClient<orderGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends orderDeleteManyArgs>(
      args?: SelectSubset<T, orderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends orderUpdateManyArgs>(
      args: SelectSubset<T, orderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends orderUpsertArgs>(
      args: SelectSubset<T, orderUpsertArgs>
    ): Prisma__orderClient<orderGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * @param {orderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const order = await prisma.order.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: orderFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Order.
     * @param {orderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const order = await prisma.order.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: orderAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__orderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    animals<T extends order$animalsArgs= {}>(args?: Subset<T, order$animalsArgs>): Prisma.PrismaPromise<Array<animalGetPayload<T>>| Null>;

    user<T extends userArgs= {}>(args?: Subset<T, userArgs>): Prisma__userClient<userGetPayload<T> | Null>;

    room<T extends roomArgs= {}>(args?: Subset<T, roomArgs>): Prisma__roomClient<roomGetPayload<T> | Null>;

    hotel<T extends hotelArgs= {}>(args?: Subset<T, hotelArgs>): Prisma__hotelClient<hotelGetPayload<T> | Null>;

    vendor<T extends vendorArgs= {}>(args?: Subset<T, vendorArgs>): Prisma__vendorClient<vendorGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * order base type for findUnique actions
   */
  export type orderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUnique
   */
  export interface orderFindUniqueArgs extends orderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }


  /**
   * order base type for findFirst actions
   */
  export type orderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<orderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }

  /**
   * order findFirst
   */
  export interface orderFindFirstArgs extends orderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<orderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * order findMany
   */
  export type orderFindManyArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<orderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * order create
   */
  export type orderCreateArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }


  /**
   * order createMany
   */
  export type orderCreateManyArgs = {
    /**
     * The data used to create many orders.
     */
    data: Enumerable<orderCreateManyInput>
  }


  /**
   * order update
   */
  export type orderUpdateArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }


  /**
   * order updateMany
   */
  export type orderUpdateManyArgs = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
  }


  /**
   * order upsert
   */
  export type orderUpsertArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }


  /**
   * order delete
   */
  export type orderDeleteArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }


  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
  }


  /**
   * order findRaw
   */
  export type orderFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * order aggregateRaw
   */
  export type orderAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * order.animals
   */
  export type order$animalsArgs = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    where?: animalWhereInput
    orderBy?: Enumerable<animalOrderByWithRelationInput>
    cursor?: animalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AnimalScalarFieldEnum>
  }


  /**
   * order without action
   */
  export type orderArgs = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderInclude | null
  }



  /**
   * Model animal
   */


  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    kind: string | null
    name: string | null
    age: string | null
    color: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnimalMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    kind: string | null
    name: string | null
    age: string | null
    color: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnimalCountAggregateOutputType = {
    id: number
    order_id: number
    kind: number
    name: number
    age: number
    color: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AnimalMinAggregateInputType = {
    id?: true
    order_id?: true
    kind?: true
    name?: true
    age?: true
    color?: true
    created_at?: true
    updated_at?: true
  }

  export type AnimalMaxAggregateInputType = {
    id?: true
    order_id?: true
    kind?: true
    name?: true
    age?: true
    color?: true
    created_at?: true
    updated_at?: true
  }

  export type AnimalCountAggregateInputType = {
    id?: true
    order_id?: true
    kind?: true
    name?: true
    age?: true
    color?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AnimalAggregateArgs = {
    /**
     * Filter which animal to aggregate.
     */
    where?: animalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of animals to fetch.
     */
    orderBy?: Enumerable<animalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: animalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs = {
    where?: animalWhereInput
    orderBy?: Enumerable<animalOrderByWithAggregationInput>
    by: AnimalScalarFieldEnum[]
    having?: animalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }


  export type AnimalGroupByOutputType = {
    id: string
    order_id: string
    kind: string
    name: string
    age: string
    color: string
    created_at: Date
    updated_at: Date
    _count: AnimalCountAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type animalSelect = {
    id?: boolean
    order_id?: boolean
    kind?: boolean
    name?: boolean
    age?: boolean
    color?: boolean
    created_at?: boolean
    updated_at?: boolean
    order?: boolean | orderArgs
  }


  export type animalInclude = {
    order?: boolean | orderArgs
  }

  export type animalGetPayload<S extends boolean | null | undefined | animalArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? animal :
    S extends undefined ? never :
    S extends { include: any } & (animalArgs | animalFindManyArgs)
    ? animal  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'order' ? orderGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (animalArgs | animalFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'order' ? orderGetPayload<S['select'][P]> :  P extends keyof animal ? animal[P] : never
  } 
      : animal


  type animalCountArgs = 
    Omit<animalFindManyArgs, 'select' | 'include'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface animalDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Animal that matches the filter.
     * @param {animalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends animalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, animalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'animal'> extends True ? Prisma__animalClient<animalGetPayload<T>> : Prisma__animalClient<animalGetPayload<T> | null, null>

    /**
     * Find one Animal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {animalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends animalFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, animalFindUniqueOrThrowArgs>
    ): Prisma__animalClient<animalGetPayload<T>>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends animalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, animalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'animal'> extends True ? Prisma__animalClient<animalGetPayload<T>> : Prisma__animalClient<animalGetPayload<T> | null, null>

    /**
     * Find the first Animal that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends animalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, animalFindFirstOrThrowArgs>
    ): Prisma__animalClient<animalGetPayload<T>>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animalWithIdOnly = await prisma.animal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends animalFindManyArgs>(
      args?: SelectSubset<T, animalFindManyArgs>
    ): Prisma.PrismaPromise<Array<animalGetPayload<T>>>

    /**
     * Create a Animal.
     * @param {animalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
    **/
    create<T extends animalCreateArgs>(
      args: SelectSubset<T, animalCreateArgs>
    ): Prisma__animalClient<animalGetPayload<T>>

    /**
     * Create many Animals.
     *     @param {animalCreateManyArgs} args - Arguments to create many Animals.
     *     @example
     *     // Create many Animals
     *     const animal = await prisma.animal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends animalCreateManyArgs>(
      args?: SelectSubset<T, animalCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Animal.
     * @param {animalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
    **/
    delete<T extends animalDeleteArgs>(
      args: SelectSubset<T, animalDeleteArgs>
    ): Prisma__animalClient<animalGetPayload<T>>

    /**
     * Update one Animal.
     * @param {animalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends animalUpdateArgs>(
      args: SelectSubset<T, animalUpdateArgs>
    ): Prisma__animalClient<animalGetPayload<T>>

    /**
     * Delete zero or more Animals.
     * @param {animalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends animalDeleteManyArgs>(
      args?: SelectSubset<T, animalDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends animalUpdateManyArgs>(
      args: SelectSubset<T, animalUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Animal.
     * @param {animalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
    **/
    upsert<T extends animalUpsertArgs>(
      args: SelectSubset<T, animalUpsertArgs>
    ): Prisma__animalClient<animalGetPayload<T>>

    /**
     * Find zero or more Animals that matches the filter.
     * @param {animalFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const animal = await prisma.animal.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: animalFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Animal.
     * @param {animalAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const animal = await prisma.animal.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: animalAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {animalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends animalCountArgs>(
      args?: Subset<T, animalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__animalClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    order<T extends orderArgs= {}>(args?: Subset<T, orderArgs>): Prisma__orderClient<orderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * animal base type for findUnique actions
   */
  export type animalFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    /**
     * Filter, which animal to fetch.
     */
    where: animalWhereUniqueInput
  }

  /**
   * animal findUnique
   */
  export interface animalFindUniqueArgs extends animalFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * animal findUniqueOrThrow
   */
  export type animalFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    /**
     * Filter, which animal to fetch.
     */
    where: animalWhereUniqueInput
  }


  /**
   * animal base type for findFirst actions
   */
  export type animalFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    /**
     * Filter, which animal to fetch.
     */
    where?: animalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of animals to fetch.
     */
    orderBy?: Enumerable<animalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for animals.
     */
    cursor?: animalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of animals.
     */
    distinct?: Enumerable<AnimalScalarFieldEnum>
  }

  /**
   * animal findFirst
   */
  export interface animalFindFirstArgs extends animalFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * animal findFirstOrThrow
   */
  export type animalFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    /**
     * Filter, which animal to fetch.
     */
    where?: animalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of animals to fetch.
     */
    orderBy?: Enumerable<animalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for animals.
     */
    cursor?: animalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of animals.
     */
    distinct?: Enumerable<AnimalScalarFieldEnum>
  }


  /**
   * animal findMany
   */
  export type animalFindManyArgs = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    /**
     * Filter, which animals to fetch.
     */
    where?: animalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of animals to fetch.
     */
    orderBy?: Enumerable<animalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing animals.
     */
    cursor?: animalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` animals.
     */
    skip?: number
    distinct?: Enumerable<AnimalScalarFieldEnum>
  }


  /**
   * animal create
   */
  export type animalCreateArgs = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    /**
     * The data needed to create a animal.
     */
    data: XOR<animalCreateInput, animalUncheckedCreateInput>
  }


  /**
   * animal createMany
   */
  export type animalCreateManyArgs = {
    /**
     * The data used to create many animals.
     */
    data: Enumerable<animalCreateManyInput>
  }


  /**
   * animal update
   */
  export type animalUpdateArgs = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    /**
     * The data needed to update a animal.
     */
    data: XOR<animalUpdateInput, animalUncheckedUpdateInput>
    /**
     * Choose, which animal to update.
     */
    where: animalWhereUniqueInput
  }


  /**
   * animal updateMany
   */
  export type animalUpdateManyArgs = {
    /**
     * The data used to update animals.
     */
    data: XOR<animalUpdateManyMutationInput, animalUncheckedUpdateManyInput>
    /**
     * Filter which animals to update
     */
    where?: animalWhereInput
  }


  /**
   * animal upsert
   */
  export type animalUpsertArgs = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    /**
     * The filter to search for the animal to update in case it exists.
     */
    where: animalWhereUniqueInput
    /**
     * In case the animal found by the `where` argument doesn't exist, create a new animal with this data.
     */
    create: XOR<animalCreateInput, animalUncheckedCreateInput>
    /**
     * In case the animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<animalUpdateInput, animalUncheckedUpdateInput>
  }


  /**
   * animal delete
   */
  export type animalDeleteArgs = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
    /**
     * Filter which animal to delete.
     */
    where: animalWhereUniqueInput
  }


  /**
   * animal deleteMany
   */
  export type animalDeleteManyArgs = {
    /**
     * Filter which animals to delete
     */
    where?: animalWhereInput
  }


  /**
   * animal findRaw
   */
  export type animalFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * animal aggregateRaw
   */
  export type animalAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * animal without action
   */
  export type animalArgs = {
    /**
     * Select specific fields to fetch from the animal
     */
    select?: animalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: animalInclude | null
  }



  /**
   * Enums
   */

  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    salt: 'salt',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    kind: 'kind',
    name: 'name',
    age: 'age',
    color: 'color',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const AuthenticationScalarFieldEnum: {
    id: 'id',
    ref_id: 'ref_id',
    ref_table: 'ref_table',
    token: 'token',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AuthenticationScalarFieldEnum = (typeof AuthenticationScalarFieldEnum)[keyof typeof AuthenticationScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const HotelScalarFieldEnum: {
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

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const Hotel_imagesScalarFieldEnum: {
    id: 'id',
    hotel_id: 'hotel_id',
    image: 'image',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Hotel_imagesScalarFieldEnum = (typeof Hotel_imagesScalarFieldEnum)[keyof typeof Hotel_imagesScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    image: 'image',
    ref_id: 'ref_id',
    ref_table: 'ref_table',
    ref_column: 'ref_column',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const OrderScalarFieldEnum: {
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

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RoomScalarFieldEnum: {
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

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    salt: 'salt',
    saldo: 'saldo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    phone?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    order?: OrderListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order?: orderOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    phone?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type vendorWhereInput = {
    AND?: Enumerable<vendorWhereInput>
    OR?: Enumerable<vendorWhereInput>
    NOT?: Enumerable<vendorWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    salt?: StringFilter | string
    saldo?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    hotel?: XOR<HotelRelationFilter, hotelWhereInput> | null
    order?: OrderListRelationFilter
  }

  export type vendorOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    saldo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hotel?: hotelOrderByWithRelationInput
    order?: orderOrderByRelationAggregateInput
  }

  export type vendorWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type vendorOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    saldo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: vendorCountOrderByAggregateInput
    _avg?: vendorAvgOrderByAggregateInput
    _max?: vendorMaxOrderByAggregateInput
    _min?: vendorMinOrderByAggregateInput
    _sum?: vendorSumOrderByAggregateInput
  }

  export type vendorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<vendorScalarWhereWithAggregatesInput>
    OR?: Enumerable<vendorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<vendorScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    salt?: StringWithAggregatesFilter | string
    saldo?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type adminWhereInput = {
    AND?: Enumerable<adminWhereInput>
    OR?: Enumerable<adminWhereInput>
    NOT?: Enumerable<adminWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    salt?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type adminWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<adminScalarWhereWithAggregatesInput>
    OR?: Enumerable<adminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<adminScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    salt?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type hotelWhereInput = {
    AND?: Enumerable<hotelWhereInput>
    OR?: Enumerable<hotelWhereInput>
    NOT?: Enumerable<hotelWhereInput>
    id?: StringFilter | string
    vendor_id?: StringFilter | string
    name?: StringFilter | string
    image?: StringNullableFilter | string | null
    city?: StringNullableFilter | string | null
    district?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    rating?: FloatNullableFilter | number | null
    rating_count?: IntNullableFilter | number | null
    price?: IntNullableFilter | number | null
    status?: BoolFilter | boolean
    address?: StringNullableFilter | string | null
    lat?: FloatNullableFilter | number | null
    lon?: FloatNullableFilter | number | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    images?: Hotel_imagesListRelationFilter
    vendor?: XOR<VendorRelationFilter, vendorWhereInput>
    rooms?: RoomListRelationFilter
    order?: OrderListRelationFilter
  }

  export type hotelOrderByWithRelationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    city?: SortOrder
    district?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    price?: SortOrder
    status?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    images?: hotel_imagesOrderByRelationAggregateInput
    vendor?: vendorOrderByWithRelationInput
    rooms?: roomOrderByRelationAggregateInput
    order?: orderOrderByRelationAggregateInput
  }

  export type hotelWhereUniqueInput = {
    id?: string
    vendor_id?: string
  }

  export type hotelOrderByWithAggregationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    city?: SortOrder
    district?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    price?: SortOrder
    status?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hotelCountOrderByAggregateInput
    _avg?: hotelAvgOrderByAggregateInput
    _max?: hotelMaxOrderByAggregateInput
    _min?: hotelMinOrderByAggregateInput
    _sum?: hotelSumOrderByAggregateInput
  }

  export type hotelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<hotelScalarWhereWithAggregatesInput>
    OR?: Enumerable<hotelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<hotelScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    vendor_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    city?: StringNullableWithAggregatesFilter | string | null
    district?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    rating?: FloatNullableWithAggregatesFilter | number | null
    rating_count?: IntNullableWithAggregatesFilter | number | null
    price?: IntNullableWithAggregatesFilter | number | null
    status?: BoolWithAggregatesFilter | boolean
    address?: StringNullableWithAggregatesFilter | string | null
    lat?: FloatNullableWithAggregatesFilter | number | null
    lon?: FloatNullableWithAggregatesFilter | number | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type hotel_imagesWhereInput = {
    AND?: Enumerable<hotel_imagesWhereInput>
    OR?: Enumerable<hotel_imagesWhereInput>
    NOT?: Enumerable<hotel_imagesWhereInput>
    id?: StringFilter | string
    hotel_id?: StringFilter | string
    image?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    hotel?: XOR<HotelRelationFilter, hotelWhereInput>
  }

  export type hotel_imagesOrderByWithRelationInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hotel?: hotelOrderByWithRelationInput
  }

  export type hotel_imagesWhereUniqueInput = {
    id?: string
  }

  export type hotel_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: hotel_imagesCountOrderByAggregateInput
    _max?: hotel_imagesMaxOrderByAggregateInput
    _min?: hotel_imagesMinOrderByAggregateInput
  }

  export type hotel_imagesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<hotel_imagesScalarWhereWithAggregatesInput>
    OR?: Enumerable<hotel_imagesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<hotel_imagesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    hotel_id?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type roomWhereInput = {
    AND?: Enumerable<roomWhereInput>
    OR?: Enumerable<roomWhereInput>
    NOT?: Enumerable<roomWhereInput>
    id?: StringFilter | string
    hotel_id?: StringFilter | string
    name?: StringFilter | string
    image?: StringFilter | string
    description?: StringFilter | string
    max_pet?: IntFilter | number
    price?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    hotel?: XOR<HotelRelationFilter, hotelWhereInput>
    order?: OrderListRelationFilter
  }

  export type roomOrderByWithRelationInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    max_pet?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    hotel?: hotelOrderByWithRelationInput
    order?: orderOrderByRelationAggregateInput
  }

  export type roomWhereUniqueInput = {
    id?: string
  }

  export type roomOrderByWithAggregationInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    max_pet?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: roomCountOrderByAggregateInput
    _avg?: roomAvgOrderByAggregateInput
    _max?: roomMaxOrderByAggregateInput
    _min?: roomMinOrderByAggregateInput
    _sum?: roomSumOrderByAggregateInput
  }

  export type roomScalarWhereWithAggregatesInput = {
    AND?: Enumerable<roomScalarWhereWithAggregatesInput>
    OR?: Enumerable<roomScalarWhereWithAggregatesInput>
    NOT?: Enumerable<roomScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    hotel_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    max_pet?: IntWithAggregatesFilter | number
    price?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type authenticationWhereInput = {
    AND?: Enumerable<authenticationWhereInput>
    OR?: Enumerable<authenticationWhereInput>
    NOT?: Enumerable<authenticationWhereInput>
    id?: StringFilter | string
    ref_id?: StringFilter | string
    ref_table?: StringFilter | string
    token?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type authenticationOrderByWithRelationInput = {
    id?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type authenticationWhereUniqueInput = {
    id?: string
    token?: string
  }

  export type authenticationOrderByWithAggregationInput = {
    id?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: authenticationCountOrderByAggregateInput
    _max?: authenticationMaxOrderByAggregateInput
    _min?: authenticationMinOrderByAggregateInput
  }

  export type authenticationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<authenticationScalarWhereWithAggregatesInput>
    OR?: Enumerable<authenticationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<authenticationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    ref_id?: StringWithAggregatesFilter | string
    ref_table?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type imageWhereInput = {
    AND?: Enumerable<imageWhereInput>
    OR?: Enumerable<imageWhereInput>
    NOT?: Enumerable<imageWhereInput>
    id?: StringFilter | string
    image?: StringFilter | string
    ref_id?: StringFilter | string
    ref_table?: StringFilter | string
    ref_column?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type imageOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    ref_column?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type imageWhereUniqueInput = {
    id?: string
  }

  export type imageOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    ref_column?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: imageCountOrderByAggregateInput
    _max?: imageMaxOrderByAggregateInput
    _min?: imageMinOrderByAggregateInput
  }

  export type imageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<imageScalarWhereWithAggregatesInput>
    OR?: Enumerable<imageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<imageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    ref_id?: StringWithAggregatesFilter | string
    ref_table?: StringWithAggregatesFilter | string
    ref_column?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type cityWhereInput = {
    AND?: Enumerable<cityWhereInput>
    OR?: Enumerable<cityWhereInput>
    NOT?: Enumerable<cityWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    status?: BoolFilter | boolean
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type cityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cityWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type cityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: cityCountOrderByAggregateInput
    _max?: cityMaxOrderByAggregateInput
    _min?: cityMinOrderByAggregateInput
  }

  export type cityScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cityScalarWhereWithAggregatesInput>
    OR?: Enumerable<cityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cityScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    status?: BoolWithAggregatesFilter | boolean
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type orderWhereInput = {
    AND?: Enumerable<orderWhereInput>
    OR?: Enumerable<orderWhereInput>
    NOT?: Enumerable<orderWhereInput>
    id?: StringFilter | string
    hotel_id?: StringFilter | string
    room_id?: StringFilter | string
    user_id?: StringFilter | string
    vendor_id?: StringFilter | string
    start_date?: DateTimeFilter | Date | string
    end_date?: DateTimeFilter | Date | string
    status?: IntFilter | number
    notes?: StringFilter | string
    amount?: IntFilter | number
    expired_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    animals?: AnimalListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
    room?: XOR<RoomRelationFilter, roomWhereInput>
    hotel?: XOR<HotelRelationFilter, hotelWhereInput>
    vendor?: XOR<VendorRelationFilter, vendorWhereInput>
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    vendor_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    amount?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animals?: animalOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    room?: roomOrderByWithRelationInput
    hotel?: hotelOrderByWithRelationInput
    vendor?: vendorOrderByWithRelationInput
  }

  export type orderWhereUniqueInput = {
    id?: string
  }

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    vendor_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    amount?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<orderScalarWhereWithAggregatesInput>
    OR?: Enumerable<orderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<orderScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    hotel_id?: StringWithAggregatesFilter | string
    room_id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    vendor_id?: StringWithAggregatesFilter | string
    start_date?: DateTimeWithAggregatesFilter | Date | string
    end_date?: DateTimeWithAggregatesFilter | Date | string
    status?: IntWithAggregatesFilter | number
    notes?: StringWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    expired_at?: DateTimeWithAggregatesFilter | Date | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type animalWhereInput = {
    AND?: Enumerable<animalWhereInput>
    OR?: Enumerable<animalWhereInput>
    NOT?: Enumerable<animalWhereInput>
    id?: StringFilter | string
    order_id?: StringFilter | string
    kind?: StringFilter | string
    name?: StringFilter | string
    age?: StringFilter | string
    color?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    order?: XOR<OrderRelationFilter, orderWhereInput>
  }

  export type animalOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    age?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    order?: orderOrderByWithRelationInput
  }

  export type animalWhereUniqueInput = {
    id?: string
  }

  export type animalOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    age?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: animalCountOrderByAggregateInput
    _max?: animalMaxOrderByAggregateInput
    _min?: animalMinOrderByAggregateInput
  }

  export type animalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<animalScalarWhereWithAggregatesInput>
    OR?: Enumerable<animalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<animalScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    order_id?: StringWithAggregatesFilter | string
    kind?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    age?: StringWithAggregatesFilter | string
    color?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type userCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendorCreateInput = {
    id?: string
    email: string
    password: string
    salt: string
    saldo?: number
    created_at?: Date | string
    updated_at?: Date | string
    hotel?: hotelCreateNestedOneWithoutVendorInput
    order?: orderCreateNestedManyWithoutVendorInput
  }

  export type vendorUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    salt: string
    saldo?: number
    created_at?: Date | string
    updated_at?: Date | string
    hotel?: hotelUncheckedCreateNestedOneWithoutVendorInput
    order?: orderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type vendorUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    saldo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: hotelUpdateOneWithoutVendorNestedInput
    order?: orderUpdateManyWithoutVendorNestedInput
  }

  export type vendorUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    saldo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: hotelUncheckedUpdateOneWithoutVendorNestedInput
    order?: orderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type vendorCreateManyInput = {
    id?: string
    email: string
    password: string
    salt: string
    saldo?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendorUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    saldo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendorUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    saldo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateInput = {
    id?: string
    email: string
    password: string
    salt: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    salt: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type adminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: string
    email: string
    password: string
    salt: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hotelCreateInput = {
    id?: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: hotel_imagesCreateNestedManyWithoutHotelInput
    vendor: vendorCreateNestedOneWithoutHotelInput
    rooms?: roomCreateNestedManyWithoutHotelInput
    order?: orderCreateNestedManyWithoutHotelInput
  }

  export type hotelUncheckedCreateInput = {
    id?: string
    vendor_id: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: hotel_imagesUncheckedCreateNestedManyWithoutHotelInput
    rooms?: roomUncheckedCreateNestedManyWithoutHotelInput
    order?: orderUncheckedCreateNestedManyWithoutHotelInput
  }

  export type hotelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: hotel_imagesUpdateManyWithoutHotelNestedInput
    vendor?: vendorUpdateOneRequiredWithoutHotelNestedInput
    rooms?: roomUpdateManyWithoutHotelNestedInput
    order?: orderUpdateManyWithoutHotelNestedInput
  }

  export type hotelUncheckedUpdateInput = {
    vendor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: hotel_imagesUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: roomUncheckedUpdateManyWithoutHotelNestedInput
    order?: orderUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type hotelCreateManyInput = {
    id?: string
    vendor_id: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hotelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hotelUncheckedUpdateManyInput = {
    vendor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hotel_imagesCreateInput = {
    id?: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
    hotel: hotelCreateNestedOneWithoutImagesInput
  }

  export type hotel_imagesUncheckedCreateInput = {
    id?: string
    hotel_id: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hotel_imagesUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: hotelUpdateOneRequiredWithoutImagesNestedInput
  }

  export type hotel_imagesUncheckedUpdateInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hotel_imagesCreateManyInput = {
    id?: string
    hotel_id: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hotel_imagesUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hotel_imagesUncheckedUpdateManyInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roomCreateInput = {
    id?: string
    name: string
    image: string
    description: string
    max_pet: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    hotel: hotelCreateNestedOneWithoutRoomsInput
    order?: orderCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateInput = {
    id?: string
    hotel_id: string
    name: string
    image: string
    description: string
    max_pet: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    order?: orderUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_pet?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: hotelUpdateOneRequiredWithoutRoomsNestedInput
    order?: orderUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_pet?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomCreateManyInput = {
    id?: string
    hotel_id: string
    name: string
    image: string
    description: string
    max_pet: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type roomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_pet?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roomUncheckedUpdateManyInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_pet?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authenticationCreateInput = {
    id?: string
    ref_id: string
    ref_table: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type authenticationUncheckedCreateInput = {
    id?: string
    ref_id: string
    ref_table: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type authenticationUpdateInput = {
    ref_id?: StringFieldUpdateOperationsInput | string
    ref_table?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authenticationUncheckedUpdateInput = {
    ref_id?: StringFieldUpdateOperationsInput | string
    ref_table?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authenticationCreateManyInput = {
    id?: string
    ref_id: string
    ref_table: string
    token: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type authenticationUpdateManyMutationInput = {
    ref_id?: StringFieldUpdateOperationsInput | string
    ref_table?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type authenticationUncheckedUpdateManyInput = {
    ref_id?: StringFieldUpdateOperationsInput | string
    ref_table?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type imageCreateInput = {
    id?: string
    image: string
    ref_id: string
    ref_table: string
    ref_column: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type imageUncheckedCreateInput = {
    id?: string
    image: string
    ref_id: string
    ref_table: string
    ref_column: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type imageUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    ref_id?: StringFieldUpdateOperationsInput | string
    ref_table?: StringFieldUpdateOperationsInput | string
    ref_column?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type imageUncheckedUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    ref_id?: StringFieldUpdateOperationsInput | string
    ref_table?: StringFieldUpdateOperationsInput | string
    ref_column?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type imageCreateManyInput = {
    id?: string
    image: string
    ref_id: string
    ref_table: string
    ref_column: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type imageUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    ref_id?: StringFieldUpdateOperationsInput | string
    ref_table?: StringFieldUpdateOperationsInput | string
    ref_column?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type imageUncheckedUpdateManyInput = {
    image?: StringFieldUpdateOperationsInput | string
    ref_id?: StringFieldUpdateOperationsInput | string
    ref_table?: StringFieldUpdateOperationsInput | string
    ref_column?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cityCreateInput = {
    id: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cityUncheckedCreateInput = {
    id: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cityUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cityCreateManyInput = {
    id: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cityUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderCreateInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalCreateNestedManyWithoutOrderInput
    user: userCreateNestedOneWithoutOrderInput
    room: roomCreateNestedOneWithoutOrderInput
    hotel: hotelCreateNestedOneWithoutOrderInput
    vendor: vendorCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    id?: string
    hotel_id: string
    room_id: string
    user_id: string
    vendor_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUpdateManyWithoutOrderNestedInput
    user?: userUpdateOneRequiredWithoutOrderNestedInput
    room?: roomUpdateOneRequiredWithoutOrderNestedInput
    hotel?: hotelUpdateOneRequiredWithoutOrderNestedInput
    vendor?: vendorUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    id?: string
    hotel_id: string
    room_id: string
    user_id: string
    vendor_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type animalCreateInput = {
    id?: string
    kind: string
    name: string
    age: string
    color: string
    created_at?: Date | string
    updated_at?: Date | string
    order: orderCreateNestedOneWithoutAnimalsInput
  }

  export type animalUncheckedCreateInput = {
    id?: string
    order_id: string
    kind: string
    name: string
    age: string
    color: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type animalUpdateInput = {
    kind?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUpdateOneRequiredWithoutAnimalsNestedInput
  }

  export type animalUncheckedUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type animalCreateManyInput = {
    id?: string
    order_id: string
    kind: string
    name: string
    age: string
    color: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type animalUpdateManyMutationInput = {
    kind?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type animalUncheckedUpdateManyInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type HotelRelationFilter = {
    is?: hotelWhereInput
    isNot?: hotelWhereInput
  }

  export type vendorCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    saldo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendorAvgOrderByAggregateInput = {
    saldo?: SortOrder
  }

  export type vendorMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    saldo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendorMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    saldo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendorSumOrderByAggregateInput = {
    saldo?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type Hotel_imagesListRelationFilter = {
    every?: hotel_imagesWhereInput
    some?: hotel_imagesWhereInput
    none?: hotel_imagesWhereInput
  }

  export type VendorRelationFilter = {
    is?: vendorWhereInput
    isNot?: vendorWhereInput
  }

  export type RoomListRelationFilter = {
    every?: roomWhereInput
    some?: roomWhereInput
    none?: roomWhereInput
  }

  export type hotel_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type hotelCountOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    city?: SortOrder
    district?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    price?: SortOrder
    status?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hotelAvgOrderByAggregateInput = {
    rating?: SortOrder
    rating_count?: SortOrder
    price?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type hotelMaxOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    city?: SortOrder
    district?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    price?: SortOrder
    status?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hotelMinOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    city?: SortOrder
    district?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    price?: SortOrder
    status?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hotelSumOrderByAggregateInput = {
    rating?: SortOrder
    rating_count?: SortOrder
    price?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type hotel_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hotel_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type hotel_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roomCountOrderByAggregateInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    max_pet?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roomAvgOrderByAggregateInput = {
    max_pet?: SortOrder
    price?: SortOrder
  }

  export type roomMaxOrderByAggregateInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    max_pet?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roomMinOrderByAggregateInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    max_pet?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type roomSumOrderByAggregateInput = {
    max_pet?: SortOrder
    price?: SortOrder
  }

  export type authenticationCountOrderByAggregateInput = {
    id?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type authenticationMaxOrderByAggregateInput = {
    id?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type authenticationMinOrderByAggregateInput = {
    id?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type imageCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    ref_column?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type imageMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    ref_column?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type imageMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    ref_id?: SortOrder
    ref_table?: SortOrder
    ref_column?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimalListRelationFilter = {
    every?: animalWhereInput
    some?: animalWhereInput
    none?: animalWhereInput
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type RoomRelationFilter = {
    is?: roomWhereInput
    isNot?: roomWhereInput
  }

  export type animalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    vendor_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    amount?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    status?: SortOrder
    amount?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    vendor_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    amount?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    hotel_id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    vendor_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    amount?: SortOrder
    expired_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    status?: SortOrder
    amount?: SortOrder
  }

  export type OrderRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type animalCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    age?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type animalMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    age?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type animalMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    kind?: SortOrder
    name?: SortOrder
    age?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<orderCreateWithoutUserInput>, Enumerable<orderUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutUserInput>
    createMany?: orderCreateManyUserInputEnvelope
    connect?: Enumerable<orderWhereUniqueInput>
  }

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<orderCreateWithoutUserInput>, Enumerable<orderUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutUserInput>
    createMany?: orderCreateManyUserInputEnvelope
    connect?: Enumerable<orderWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<orderCreateWithoutUserInput>, Enumerable<orderUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<orderUpsertWithWhereUniqueWithoutUserInput>
    createMany?: orderCreateManyUserInputEnvelope
    set?: Enumerable<orderWhereUniqueInput>
    disconnect?: Enumerable<orderWhereUniqueInput>
    delete?: Enumerable<orderWhereUniqueInput>
    connect?: Enumerable<orderWhereUniqueInput>
    update?: Enumerable<orderUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<orderUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<orderScalarWhereInput>
  }

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<orderCreateWithoutUserInput>, Enumerable<orderUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<orderUpsertWithWhereUniqueWithoutUserInput>
    createMany?: orderCreateManyUserInputEnvelope
    set?: Enumerable<orderWhereUniqueInput>
    disconnect?: Enumerable<orderWhereUniqueInput>
    delete?: Enumerable<orderWhereUniqueInput>
    connect?: Enumerable<orderWhereUniqueInput>
    update?: Enumerable<orderUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<orderUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<orderScalarWhereInput>
  }

  export type hotelCreateNestedOneWithoutVendorInput = {
    create?: XOR<hotelCreateWithoutVendorInput, hotelUncheckedCreateWithoutVendorInput>
    connectOrCreate?: hotelCreateOrConnectWithoutVendorInput
    connect?: hotelWhereUniqueInput
  }

  export type orderCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<orderCreateWithoutVendorInput>, Enumerable<orderUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutVendorInput>
    createMany?: orderCreateManyVendorInputEnvelope
    connect?: Enumerable<orderWhereUniqueInput>
  }

  export type hotelUncheckedCreateNestedOneWithoutVendorInput = {
    create?: XOR<hotelCreateWithoutVendorInput, hotelUncheckedCreateWithoutVendorInput>
    connectOrCreate?: hotelCreateOrConnectWithoutVendorInput
    connect?: hotelWhereUniqueInput
  }

  export type orderUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Enumerable<orderCreateWithoutVendorInput>, Enumerable<orderUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutVendorInput>
    createMany?: orderCreateManyVendorInputEnvelope
    connect?: Enumerable<orderWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type hotelUpdateOneWithoutVendorNestedInput = {
    create?: XOR<hotelCreateWithoutVendorInput, hotelUncheckedCreateWithoutVendorInput>
    connectOrCreate?: hotelCreateOrConnectWithoutVendorInput
    upsert?: hotelUpsertWithoutVendorInput
    disconnect?: boolean
    delete?: boolean
    connect?: hotelWhereUniqueInput
    update?: XOR<hotelUpdateWithoutVendorInput, hotelUncheckedUpdateWithoutVendorInput>
  }

  export type orderUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Enumerable<orderCreateWithoutVendorInput>, Enumerable<orderUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<orderUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: orderCreateManyVendorInputEnvelope
    set?: Enumerable<orderWhereUniqueInput>
    disconnect?: Enumerable<orderWhereUniqueInput>
    delete?: Enumerable<orderWhereUniqueInput>
    connect?: Enumerable<orderWhereUniqueInput>
    update?: Enumerable<orderUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<orderUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<orderScalarWhereInput>
  }

  export type hotelUncheckedUpdateOneWithoutVendorNestedInput = {
    create?: XOR<hotelCreateWithoutVendorInput, hotelUncheckedCreateWithoutVendorInput>
    connectOrCreate?: hotelCreateOrConnectWithoutVendorInput
    upsert?: hotelUpsertWithoutVendorInput
    disconnect?: boolean
    delete?: boolean
    connect?: hotelWhereUniqueInput
    update?: XOR<hotelUpdateWithoutVendorInput, hotelUncheckedUpdateWithoutVendorInput>
  }

  export type orderUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Enumerable<orderCreateWithoutVendorInput>, Enumerable<orderUncheckedCreateWithoutVendorInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutVendorInput>
    upsert?: Enumerable<orderUpsertWithWhereUniqueWithoutVendorInput>
    createMany?: orderCreateManyVendorInputEnvelope
    set?: Enumerable<orderWhereUniqueInput>
    disconnect?: Enumerable<orderWhereUniqueInput>
    delete?: Enumerable<orderWhereUniqueInput>
    connect?: Enumerable<orderWhereUniqueInput>
    update?: Enumerable<orderUpdateWithWhereUniqueWithoutVendorInput>
    updateMany?: Enumerable<orderUpdateManyWithWhereWithoutVendorInput>
    deleteMany?: Enumerable<orderScalarWhereInput>
  }

  export type hotel_imagesCreateNestedManyWithoutHotelInput = {
    create?: XOR<Enumerable<hotel_imagesCreateWithoutHotelInput>, Enumerable<hotel_imagesUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<hotel_imagesCreateOrConnectWithoutHotelInput>
    createMany?: hotel_imagesCreateManyHotelInputEnvelope
    connect?: Enumerable<hotel_imagesWhereUniqueInput>
  }

  export type vendorCreateNestedOneWithoutHotelInput = {
    create?: XOR<vendorCreateWithoutHotelInput, vendorUncheckedCreateWithoutHotelInput>
    connectOrCreate?: vendorCreateOrConnectWithoutHotelInput
    connect?: vendorWhereUniqueInput
  }

  export type roomCreateNestedManyWithoutHotelInput = {
    create?: XOR<Enumerable<roomCreateWithoutHotelInput>, Enumerable<roomUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<roomCreateOrConnectWithoutHotelInput>
    createMany?: roomCreateManyHotelInputEnvelope
    connect?: Enumerable<roomWhereUniqueInput>
  }

  export type orderCreateNestedManyWithoutHotelInput = {
    create?: XOR<Enumerable<orderCreateWithoutHotelInput>, Enumerable<orderUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutHotelInput>
    createMany?: orderCreateManyHotelInputEnvelope
    connect?: Enumerable<orderWhereUniqueInput>
  }

  export type hotel_imagesUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<Enumerable<hotel_imagesCreateWithoutHotelInput>, Enumerable<hotel_imagesUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<hotel_imagesCreateOrConnectWithoutHotelInput>
    createMany?: hotel_imagesCreateManyHotelInputEnvelope
    connect?: Enumerable<hotel_imagesWhereUniqueInput>
  }

  export type roomUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<Enumerable<roomCreateWithoutHotelInput>, Enumerable<roomUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<roomCreateOrConnectWithoutHotelInput>
    createMany?: roomCreateManyHotelInputEnvelope
    connect?: Enumerable<roomWhereUniqueInput>
  }

  export type orderUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<Enumerable<orderCreateWithoutHotelInput>, Enumerable<orderUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutHotelInput>
    createMany?: orderCreateManyHotelInputEnvelope
    connect?: Enumerable<orderWhereUniqueInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type hotel_imagesUpdateManyWithoutHotelNestedInput = {
    create?: XOR<Enumerable<hotel_imagesCreateWithoutHotelInput>, Enumerable<hotel_imagesUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<hotel_imagesCreateOrConnectWithoutHotelInput>
    upsert?: Enumerable<hotel_imagesUpsertWithWhereUniqueWithoutHotelInput>
    createMany?: hotel_imagesCreateManyHotelInputEnvelope
    set?: Enumerable<hotel_imagesWhereUniqueInput>
    disconnect?: Enumerable<hotel_imagesWhereUniqueInput>
    delete?: Enumerable<hotel_imagesWhereUniqueInput>
    connect?: Enumerable<hotel_imagesWhereUniqueInput>
    update?: Enumerable<hotel_imagesUpdateWithWhereUniqueWithoutHotelInput>
    updateMany?: Enumerable<hotel_imagesUpdateManyWithWhereWithoutHotelInput>
    deleteMany?: Enumerable<hotel_imagesScalarWhereInput>
  }

  export type vendorUpdateOneRequiredWithoutHotelNestedInput = {
    create?: XOR<vendorCreateWithoutHotelInput, vendorUncheckedCreateWithoutHotelInput>
    connectOrCreate?: vendorCreateOrConnectWithoutHotelInput
    upsert?: vendorUpsertWithoutHotelInput
    connect?: vendorWhereUniqueInput
    update?: XOR<vendorUpdateWithoutHotelInput, vendorUncheckedUpdateWithoutHotelInput>
  }

  export type roomUpdateManyWithoutHotelNestedInput = {
    create?: XOR<Enumerable<roomCreateWithoutHotelInput>, Enumerable<roomUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<roomCreateOrConnectWithoutHotelInput>
    upsert?: Enumerable<roomUpsertWithWhereUniqueWithoutHotelInput>
    createMany?: roomCreateManyHotelInputEnvelope
    set?: Enumerable<roomWhereUniqueInput>
    disconnect?: Enumerable<roomWhereUniqueInput>
    delete?: Enumerable<roomWhereUniqueInput>
    connect?: Enumerable<roomWhereUniqueInput>
    update?: Enumerable<roomUpdateWithWhereUniqueWithoutHotelInput>
    updateMany?: Enumerable<roomUpdateManyWithWhereWithoutHotelInput>
    deleteMany?: Enumerable<roomScalarWhereInput>
  }

  export type orderUpdateManyWithoutHotelNestedInput = {
    create?: XOR<Enumerable<orderCreateWithoutHotelInput>, Enumerable<orderUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutHotelInput>
    upsert?: Enumerable<orderUpsertWithWhereUniqueWithoutHotelInput>
    createMany?: orderCreateManyHotelInputEnvelope
    set?: Enumerable<orderWhereUniqueInput>
    disconnect?: Enumerable<orderWhereUniqueInput>
    delete?: Enumerable<orderWhereUniqueInput>
    connect?: Enumerable<orderWhereUniqueInput>
    update?: Enumerable<orderUpdateWithWhereUniqueWithoutHotelInput>
    updateMany?: Enumerable<orderUpdateManyWithWhereWithoutHotelInput>
    deleteMany?: Enumerable<orderScalarWhereInput>
  }

  export type hotel_imagesUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<Enumerable<hotel_imagesCreateWithoutHotelInput>, Enumerable<hotel_imagesUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<hotel_imagesCreateOrConnectWithoutHotelInput>
    upsert?: Enumerable<hotel_imagesUpsertWithWhereUniqueWithoutHotelInput>
    createMany?: hotel_imagesCreateManyHotelInputEnvelope
    set?: Enumerable<hotel_imagesWhereUniqueInput>
    disconnect?: Enumerable<hotel_imagesWhereUniqueInput>
    delete?: Enumerable<hotel_imagesWhereUniqueInput>
    connect?: Enumerable<hotel_imagesWhereUniqueInput>
    update?: Enumerable<hotel_imagesUpdateWithWhereUniqueWithoutHotelInput>
    updateMany?: Enumerable<hotel_imagesUpdateManyWithWhereWithoutHotelInput>
    deleteMany?: Enumerable<hotel_imagesScalarWhereInput>
  }

  export type roomUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<Enumerable<roomCreateWithoutHotelInput>, Enumerable<roomUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<roomCreateOrConnectWithoutHotelInput>
    upsert?: Enumerable<roomUpsertWithWhereUniqueWithoutHotelInput>
    createMany?: roomCreateManyHotelInputEnvelope
    set?: Enumerable<roomWhereUniqueInput>
    disconnect?: Enumerable<roomWhereUniqueInput>
    delete?: Enumerable<roomWhereUniqueInput>
    connect?: Enumerable<roomWhereUniqueInput>
    update?: Enumerable<roomUpdateWithWhereUniqueWithoutHotelInput>
    updateMany?: Enumerable<roomUpdateManyWithWhereWithoutHotelInput>
    deleteMany?: Enumerable<roomScalarWhereInput>
  }

  export type orderUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<Enumerable<orderCreateWithoutHotelInput>, Enumerable<orderUncheckedCreateWithoutHotelInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutHotelInput>
    upsert?: Enumerable<orderUpsertWithWhereUniqueWithoutHotelInput>
    createMany?: orderCreateManyHotelInputEnvelope
    set?: Enumerable<orderWhereUniqueInput>
    disconnect?: Enumerable<orderWhereUniqueInput>
    delete?: Enumerable<orderWhereUniqueInput>
    connect?: Enumerable<orderWhereUniqueInput>
    update?: Enumerable<orderUpdateWithWhereUniqueWithoutHotelInput>
    updateMany?: Enumerable<orderUpdateManyWithWhereWithoutHotelInput>
    deleteMany?: Enumerable<orderScalarWhereInput>
  }

  export type hotelCreateNestedOneWithoutImagesInput = {
    create?: XOR<hotelCreateWithoutImagesInput, hotelUncheckedCreateWithoutImagesInput>
    connectOrCreate?: hotelCreateOrConnectWithoutImagesInput
    connect?: hotelWhereUniqueInput
  }

  export type hotelUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<hotelCreateWithoutImagesInput, hotelUncheckedCreateWithoutImagesInput>
    connectOrCreate?: hotelCreateOrConnectWithoutImagesInput
    upsert?: hotelUpsertWithoutImagesInput
    connect?: hotelWhereUniqueInput
    update?: XOR<hotelUpdateWithoutImagesInput, hotelUncheckedUpdateWithoutImagesInput>
  }

  export type hotelCreateNestedOneWithoutRoomsInput = {
    create?: XOR<hotelCreateWithoutRoomsInput, hotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: hotelCreateOrConnectWithoutRoomsInput
    connect?: hotelWhereUniqueInput
  }

  export type orderCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<orderCreateWithoutRoomInput>, Enumerable<orderUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutRoomInput>
    createMany?: orderCreateManyRoomInputEnvelope
    connect?: Enumerable<orderWhereUniqueInput>
  }

  export type orderUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<Enumerable<orderCreateWithoutRoomInput>, Enumerable<orderUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutRoomInput>
    createMany?: orderCreateManyRoomInputEnvelope
    connect?: Enumerable<orderWhereUniqueInput>
  }

  export type hotelUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<hotelCreateWithoutRoomsInput, hotelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: hotelCreateOrConnectWithoutRoomsInput
    upsert?: hotelUpsertWithoutRoomsInput
    connect?: hotelWhereUniqueInput
    update?: XOR<hotelUpdateWithoutRoomsInput, hotelUncheckedUpdateWithoutRoomsInput>
  }

  export type orderUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<orderCreateWithoutRoomInput>, Enumerable<orderUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<orderUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: orderCreateManyRoomInputEnvelope
    set?: Enumerable<orderWhereUniqueInput>
    disconnect?: Enumerable<orderWhereUniqueInput>
    delete?: Enumerable<orderWhereUniqueInput>
    connect?: Enumerable<orderWhereUniqueInput>
    update?: Enumerable<orderUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<orderUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<orderScalarWhereInput>
  }

  export type orderUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<Enumerable<orderCreateWithoutRoomInput>, Enumerable<orderUncheckedCreateWithoutRoomInput>>
    connectOrCreate?: Enumerable<orderCreateOrConnectWithoutRoomInput>
    upsert?: Enumerable<orderUpsertWithWhereUniqueWithoutRoomInput>
    createMany?: orderCreateManyRoomInputEnvelope
    set?: Enumerable<orderWhereUniqueInput>
    disconnect?: Enumerable<orderWhereUniqueInput>
    delete?: Enumerable<orderWhereUniqueInput>
    connect?: Enumerable<orderWhereUniqueInput>
    update?: Enumerable<orderUpdateWithWhereUniqueWithoutRoomInput>
    updateMany?: Enumerable<orderUpdateManyWithWhereWithoutRoomInput>
    deleteMany?: Enumerable<orderScalarWhereInput>
  }

  export type animalCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<animalCreateWithoutOrderInput>, Enumerable<animalUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<animalCreateOrConnectWithoutOrderInput>
    createMany?: animalCreateManyOrderInputEnvelope
    connect?: Enumerable<animalWhereUniqueInput>
  }

  export type userCreateNestedOneWithoutOrderInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    connectOrCreate?: userCreateOrConnectWithoutOrderInput
    connect?: userWhereUniqueInput
  }

  export type roomCreateNestedOneWithoutOrderInput = {
    create?: XOR<roomCreateWithoutOrderInput, roomUncheckedCreateWithoutOrderInput>
    connectOrCreate?: roomCreateOrConnectWithoutOrderInput
    connect?: roomWhereUniqueInput
  }

  export type hotelCreateNestedOneWithoutOrderInput = {
    create?: XOR<hotelCreateWithoutOrderInput, hotelUncheckedCreateWithoutOrderInput>
    connectOrCreate?: hotelCreateOrConnectWithoutOrderInput
    connect?: hotelWhereUniqueInput
  }

  export type vendorCreateNestedOneWithoutOrderInput = {
    create?: XOR<vendorCreateWithoutOrderInput, vendorUncheckedCreateWithoutOrderInput>
    connectOrCreate?: vendorCreateOrConnectWithoutOrderInput
    connect?: vendorWhereUniqueInput
  }

  export type animalUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<animalCreateWithoutOrderInput>, Enumerable<animalUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<animalCreateOrConnectWithoutOrderInput>
    createMany?: animalCreateManyOrderInputEnvelope
    connect?: Enumerable<animalWhereUniqueInput>
  }

  export type animalUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<animalCreateWithoutOrderInput>, Enumerable<animalUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<animalCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<animalUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: animalCreateManyOrderInputEnvelope
    set?: Enumerable<animalWhereUniqueInput>
    disconnect?: Enumerable<animalWhereUniqueInput>
    delete?: Enumerable<animalWhereUniqueInput>
    connect?: Enumerable<animalWhereUniqueInput>
    update?: Enumerable<animalUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<animalUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<animalScalarWhereInput>
  }

  export type userUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
    connectOrCreate?: userCreateOrConnectWithoutOrderInput
    upsert?: userUpsertWithoutOrderInput
    connect?: userWhereUniqueInput
    update?: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>
  }

  export type roomUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<roomCreateWithoutOrderInput, roomUncheckedCreateWithoutOrderInput>
    connectOrCreate?: roomCreateOrConnectWithoutOrderInput
    upsert?: roomUpsertWithoutOrderInput
    connect?: roomWhereUniqueInput
    update?: XOR<roomUpdateWithoutOrderInput, roomUncheckedUpdateWithoutOrderInput>
  }

  export type hotelUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<hotelCreateWithoutOrderInput, hotelUncheckedCreateWithoutOrderInput>
    connectOrCreate?: hotelCreateOrConnectWithoutOrderInput
    upsert?: hotelUpsertWithoutOrderInput
    connect?: hotelWhereUniqueInput
    update?: XOR<hotelUpdateWithoutOrderInput, hotelUncheckedUpdateWithoutOrderInput>
  }

  export type vendorUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<vendorCreateWithoutOrderInput, vendorUncheckedCreateWithoutOrderInput>
    connectOrCreate?: vendorCreateOrConnectWithoutOrderInput
    upsert?: vendorUpsertWithoutOrderInput
    connect?: vendorWhereUniqueInput
    update?: XOR<vendorUpdateWithoutOrderInput, vendorUncheckedUpdateWithoutOrderInput>
  }

  export type animalUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<animalCreateWithoutOrderInput>, Enumerable<animalUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<animalCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<animalUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: animalCreateManyOrderInputEnvelope
    set?: Enumerable<animalWhereUniqueInput>
    disconnect?: Enumerable<animalWhereUniqueInput>
    delete?: Enumerable<animalWhereUniqueInput>
    connect?: Enumerable<animalWhereUniqueInput>
    update?: Enumerable<animalUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<animalUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<animalScalarWhereInput>
  }

  export type orderCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<orderCreateWithoutAnimalsInput, orderUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: orderCreateOrConnectWithoutAnimalsInput
    connect?: orderWhereUniqueInput
  }

  export type orderUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: XOR<orderCreateWithoutAnimalsInput, orderUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: orderCreateOrConnectWithoutAnimalsInput
    upsert?: orderUpsertWithoutAnimalsInput
    connect?: orderWhereUniqueInput
    update?: XOR<orderUpdateWithoutAnimalsInput, orderUncheckedUpdateWithoutAnimalsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type orderCreateWithoutUserInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalCreateNestedManyWithoutOrderInput
    room: roomCreateNestedOneWithoutOrderInput
    hotel: hotelCreateNestedOneWithoutOrderInput
    vendor: vendorCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUserInput = {
    id?: string
    hotel_id: string
    room_id: string
    vendor_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderCreateManyUserInputEnvelope = {
    data: Enumerable<orderCreateManyUserInput>
  }

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutOrderInput>
  }

  export type orderScalarWhereInput = {
    AND?: Enumerable<orderScalarWhereInput>
    OR?: Enumerable<orderScalarWhereInput>
    NOT?: Enumerable<orderScalarWhereInput>
    id?: StringFilter | string
    hotel_id?: StringFilter | string
    room_id?: StringFilter | string
    user_id?: StringFilter | string
    vendor_id?: StringFilter | string
    start_date?: DateTimeFilter | Date | string
    end_date?: DateTimeFilter | Date | string
    status?: IntFilter | number
    notes?: StringFilter | string
    amount?: IntFilter | number
    expired_at?: DateTimeFilter | Date | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type hotelCreateWithoutVendorInput = {
    id?: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: hotel_imagesCreateNestedManyWithoutHotelInput
    rooms?: roomCreateNestedManyWithoutHotelInput
    order?: orderCreateNestedManyWithoutHotelInput
  }

  export type hotelUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: hotel_imagesUncheckedCreateNestedManyWithoutHotelInput
    rooms?: roomUncheckedCreateNestedManyWithoutHotelInput
    order?: orderUncheckedCreateNestedManyWithoutHotelInput
  }

  export type hotelCreateOrConnectWithoutVendorInput = {
    where: hotelWhereUniqueInput
    create: XOR<hotelCreateWithoutVendorInput, hotelUncheckedCreateWithoutVendorInput>
  }

  export type orderCreateWithoutVendorInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalCreateNestedManyWithoutOrderInput
    user: userCreateNestedOneWithoutOrderInput
    room: roomCreateNestedOneWithoutOrderInput
    hotel: hotelCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutVendorInput = {
    id?: string
    hotel_id: string
    room_id: string
    user_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutVendorInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutVendorInput, orderUncheckedCreateWithoutVendorInput>
  }

  export type orderCreateManyVendorInputEnvelope = {
    data: Enumerable<orderCreateManyVendorInput>
  }

  export type hotelUpsertWithoutVendorInput = {
    update: XOR<hotelUpdateWithoutVendorInput, hotelUncheckedUpdateWithoutVendorInput>
    create: XOR<hotelCreateWithoutVendorInput, hotelUncheckedCreateWithoutVendorInput>
  }

  export type hotelUpdateWithoutVendorInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: hotel_imagesUpdateManyWithoutHotelNestedInput
    rooms?: roomUpdateManyWithoutHotelNestedInput
    order?: orderUpdateManyWithoutHotelNestedInput
  }

  export type hotelUncheckedUpdateWithoutVendorInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: hotel_imagesUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: roomUncheckedUpdateManyWithoutHotelNestedInput
    order?: orderUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type orderUpsertWithWhereUniqueWithoutVendorInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutVendorInput, orderUncheckedUpdateWithoutVendorInput>
    create: XOR<orderCreateWithoutVendorInput, orderUncheckedCreateWithoutVendorInput>
  }

  export type orderUpdateWithWhereUniqueWithoutVendorInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutVendorInput, orderUncheckedUpdateWithoutVendorInput>
  }

  export type orderUpdateManyWithWhereWithoutVendorInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutOrderInput>
  }

  export type hotel_imagesCreateWithoutHotelInput = {
    id?: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hotel_imagesUncheckedCreateWithoutHotelInput = {
    id?: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hotel_imagesCreateOrConnectWithoutHotelInput = {
    where: hotel_imagesWhereUniqueInput
    create: XOR<hotel_imagesCreateWithoutHotelInput, hotel_imagesUncheckedCreateWithoutHotelInput>
  }

  export type hotel_imagesCreateManyHotelInputEnvelope = {
    data: Enumerable<hotel_imagesCreateManyHotelInput>
  }

  export type vendorCreateWithoutHotelInput = {
    id?: string
    email: string
    password: string
    salt: string
    saldo?: number
    created_at?: Date | string
    updated_at?: Date | string
    order?: orderCreateNestedManyWithoutVendorInput
  }

  export type vendorUncheckedCreateWithoutHotelInput = {
    id?: string
    email: string
    password: string
    salt: string
    saldo?: number
    created_at?: Date | string
    updated_at?: Date | string
    order?: orderUncheckedCreateNestedManyWithoutVendorInput
  }

  export type vendorCreateOrConnectWithoutHotelInput = {
    where: vendorWhereUniqueInput
    create: XOR<vendorCreateWithoutHotelInput, vendorUncheckedCreateWithoutHotelInput>
  }

  export type roomCreateWithoutHotelInput = {
    id?: string
    name: string
    image: string
    description: string
    max_pet: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    order?: orderCreateNestedManyWithoutRoomInput
  }

  export type roomUncheckedCreateWithoutHotelInput = {
    id?: string
    name: string
    image: string
    description: string
    max_pet: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    order?: orderUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomCreateOrConnectWithoutHotelInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutHotelInput, roomUncheckedCreateWithoutHotelInput>
  }

  export type roomCreateManyHotelInputEnvelope = {
    data: Enumerable<roomCreateManyHotelInput>
  }

  export type orderCreateWithoutHotelInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalCreateNestedManyWithoutOrderInput
    user: userCreateNestedOneWithoutOrderInput
    room: roomCreateNestedOneWithoutOrderInput
    vendor: vendorCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutHotelInput = {
    id?: string
    room_id: string
    user_id: string
    vendor_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutHotelInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutHotelInput, orderUncheckedCreateWithoutHotelInput>
  }

  export type orderCreateManyHotelInputEnvelope = {
    data: Enumerable<orderCreateManyHotelInput>
  }

  export type hotel_imagesUpsertWithWhereUniqueWithoutHotelInput = {
    where: hotel_imagesWhereUniqueInput
    update: XOR<hotel_imagesUpdateWithoutHotelInput, hotel_imagesUncheckedUpdateWithoutHotelInput>
    create: XOR<hotel_imagesCreateWithoutHotelInput, hotel_imagesUncheckedCreateWithoutHotelInput>
  }

  export type hotel_imagesUpdateWithWhereUniqueWithoutHotelInput = {
    where: hotel_imagesWhereUniqueInput
    data: XOR<hotel_imagesUpdateWithoutHotelInput, hotel_imagesUncheckedUpdateWithoutHotelInput>
  }

  export type hotel_imagesUpdateManyWithWhereWithoutHotelInput = {
    where: hotel_imagesScalarWhereInput
    data: XOR<hotel_imagesUpdateManyMutationInput, hotel_imagesUncheckedUpdateManyWithoutImagesInput>
  }

  export type hotel_imagesScalarWhereInput = {
    AND?: Enumerable<hotel_imagesScalarWhereInput>
    OR?: Enumerable<hotel_imagesScalarWhereInput>
    NOT?: Enumerable<hotel_imagesScalarWhereInput>
    id?: StringFilter | string
    hotel_id?: StringFilter | string
    image?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type vendorUpsertWithoutHotelInput = {
    update: XOR<vendorUpdateWithoutHotelInput, vendorUncheckedUpdateWithoutHotelInput>
    create: XOR<vendorCreateWithoutHotelInput, vendorUncheckedCreateWithoutHotelInput>
  }

  export type vendorUpdateWithoutHotelInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    saldo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUpdateManyWithoutVendorNestedInput
  }

  export type vendorUncheckedUpdateWithoutHotelInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    saldo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type roomUpsertWithWhereUniqueWithoutHotelInput = {
    where: roomWhereUniqueInput
    update: XOR<roomUpdateWithoutHotelInput, roomUncheckedUpdateWithoutHotelInput>
    create: XOR<roomCreateWithoutHotelInput, roomUncheckedCreateWithoutHotelInput>
  }

  export type roomUpdateWithWhereUniqueWithoutHotelInput = {
    where: roomWhereUniqueInput
    data: XOR<roomUpdateWithoutHotelInput, roomUncheckedUpdateWithoutHotelInput>
  }

  export type roomUpdateManyWithWhereWithoutHotelInput = {
    where: roomScalarWhereInput
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyWithoutRoomsInput>
  }

  export type roomScalarWhereInput = {
    AND?: Enumerable<roomScalarWhereInput>
    OR?: Enumerable<roomScalarWhereInput>
    NOT?: Enumerable<roomScalarWhereInput>
    id?: StringFilter | string
    hotel_id?: StringFilter | string
    name?: StringFilter | string
    image?: StringFilter | string
    description?: StringFilter | string
    max_pet?: IntFilter | number
    price?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type orderUpsertWithWhereUniqueWithoutHotelInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutHotelInput, orderUncheckedUpdateWithoutHotelInput>
    create: XOR<orderCreateWithoutHotelInput, orderUncheckedCreateWithoutHotelInput>
  }

  export type orderUpdateWithWhereUniqueWithoutHotelInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutHotelInput, orderUncheckedUpdateWithoutHotelInput>
  }

  export type orderUpdateManyWithWhereWithoutHotelInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutOrderInput>
  }

  export type hotelCreateWithoutImagesInput = {
    id?: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    vendor: vendorCreateNestedOneWithoutHotelInput
    rooms?: roomCreateNestedManyWithoutHotelInput
    order?: orderCreateNestedManyWithoutHotelInput
  }

  export type hotelUncheckedCreateWithoutImagesInput = {
    id?: string
    vendor_id: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    rooms?: roomUncheckedCreateNestedManyWithoutHotelInput
    order?: orderUncheckedCreateNestedManyWithoutHotelInput
  }

  export type hotelCreateOrConnectWithoutImagesInput = {
    where: hotelWhereUniqueInput
    create: XOR<hotelCreateWithoutImagesInput, hotelUncheckedCreateWithoutImagesInput>
  }

  export type hotelUpsertWithoutImagesInput = {
    update: XOR<hotelUpdateWithoutImagesInput, hotelUncheckedUpdateWithoutImagesInput>
    create: XOR<hotelCreateWithoutImagesInput, hotelUncheckedCreateWithoutImagesInput>
  }

  export type hotelUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: vendorUpdateOneRequiredWithoutHotelNestedInput
    rooms?: roomUpdateManyWithoutHotelNestedInput
    order?: orderUpdateManyWithoutHotelNestedInput
  }

  export type hotelUncheckedUpdateWithoutImagesInput = {
    vendor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: roomUncheckedUpdateManyWithoutHotelNestedInput
    order?: orderUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type hotelCreateWithoutRoomsInput = {
    id?: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: hotel_imagesCreateNestedManyWithoutHotelInput
    vendor: vendorCreateNestedOneWithoutHotelInput
    order?: orderCreateNestedManyWithoutHotelInput
  }

  export type hotelUncheckedCreateWithoutRoomsInput = {
    id?: string
    vendor_id: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: hotel_imagesUncheckedCreateNestedManyWithoutHotelInput
    order?: orderUncheckedCreateNestedManyWithoutHotelInput
  }

  export type hotelCreateOrConnectWithoutRoomsInput = {
    where: hotelWhereUniqueInput
    create: XOR<hotelCreateWithoutRoomsInput, hotelUncheckedCreateWithoutRoomsInput>
  }

  export type orderCreateWithoutRoomInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalCreateNestedManyWithoutOrderInput
    user: userCreateNestedOneWithoutOrderInput
    hotel: hotelCreateNestedOneWithoutOrderInput
    vendor: vendorCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutRoomInput = {
    id?: string
    hotel_id: string
    user_id: string
    vendor_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    animals?: animalUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutRoomInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutRoomInput, orderUncheckedCreateWithoutRoomInput>
  }

  export type orderCreateManyRoomInputEnvelope = {
    data: Enumerable<orderCreateManyRoomInput>
  }

  export type hotelUpsertWithoutRoomsInput = {
    update: XOR<hotelUpdateWithoutRoomsInput, hotelUncheckedUpdateWithoutRoomsInput>
    create: XOR<hotelCreateWithoutRoomsInput, hotelUncheckedCreateWithoutRoomsInput>
  }

  export type hotelUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: hotel_imagesUpdateManyWithoutHotelNestedInput
    vendor?: vendorUpdateOneRequiredWithoutHotelNestedInput
    order?: orderUpdateManyWithoutHotelNestedInput
  }

  export type hotelUncheckedUpdateWithoutRoomsInput = {
    vendor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: hotel_imagesUncheckedUpdateManyWithoutHotelNestedInput
    order?: orderUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type orderUpsertWithWhereUniqueWithoutRoomInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutRoomInput, orderUncheckedUpdateWithoutRoomInput>
    create: XOR<orderCreateWithoutRoomInput, orderUncheckedCreateWithoutRoomInput>
  }

  export type orderUpdateWithWhereUniqueWithoutRoomInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutRoomInput, orderUncheckedUpdateWithoutRoomInput>
  }

  export type orderUpdateManyWithWhereWithoutRoomInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutOrderInput>
  }

  export type animalCreateWithoutOrderInput = {
    id?: string
    kind: string
    name: string
    age: string
    color: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type animalUncheckedCreateWithoutOrderInput = {
    id?: string
    kind: string
    name: string
    age: string
    color: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type animalCreateOrConnectWithoutOrderInput = {
    where: animalWhereUniqueInput
    create: XOR<animalCreateWithoutOrderInput, animalUncheckedCreateWithoutOrderInput>
  }

  export type animalCreateManyOrderInputEnvelope = {
    data: Enumerable<animalCreateManyOrderInput>
  }

  export type userCreateWithoutOrderInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userUncheckedCreateWithoutOrderInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userCreateOrConnectWithoutOrderInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
  }

  export type roomCreateWithoutOrderInput = {
    id?: string
    name: string
    image: string
    description: string
    max_pet: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    hotel: hotelCreateNestedOneWithoutRoomsInput
  }

  export type roomUncheckedCreateWithoutOrderInput = {
    id?: string
    hotel_id: string
    name: string
    image: string
    description: string
    max_pet: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type roomCreateOrConnectWithoutOrderInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutOrderInput, roomUncheckedCreateWithoutOrderInput>
  }

  export type hotelCreateWithoutOrderInput = {
    id?: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: hotel_imagesCreateNestedManyWithoutHotelInput
    vendor: vendorCreateNestedOneWithoutHotelInput
    rooms?: roomCreateNestedManyWithoutHotelInput
  }

  export type hotelUncheckedCreateWithoutOrderInput = {
    id?: string
    vendor_id: string
    name: string
    image?: string | null
    city?: string | null
    district?: string | null
    phone?: string | null
    description?: string | null
    rating?: number | null
    rating_count?: number | null
    price?: number | null
    status?: boolean
    address?: string | null
    lat?: number | null
    lon?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    images?: hotel_imagesUncheckedCreateNestedManyWithoutHotelInput
    rooms?: roomUncheckedCreateNestedManyWithoutHotelInput
  }

  export type hotelCreateOrConnectWithoutOrderInput = {
    where: hotelWhereUniqueInput
    create: XOR<hotelCreateWithoutOrderInput, hotelUncheckedCreateWithoutOrderInput>
  }

  export type vendorCreateWithoutOrderInput = {
    id?: string
    email: string
    password: string
    salt: string
    saldo?: number
    created_at?: Date | string
    updated_at?: Date | string
    hotel?: hotelCreateNestedOneWithoutVendorInput
  }

  export type vendorUncheckedCreateWithoutOrderInput = {
    id?: string
    email: string
    password: string
    salt: string
    saldo?: number
    created_at?: Date | string
    updated_at?: Date | string
    hotel?: hotelUncheckedCreateNestedOneWithoutVendorInput
  }

  export type vendorCreateOrConnectWithoutOrderInput = {
    where: vendorWhereUniqueInput
    create: XOR<vendorCreateWithoutOrderInput, vendorUncheckedCreateWithoutOrderInput>
  }

  export type animalUpsertWithWhereUniqueWithoutOrderInput = {
    where: animalWhereUniqueInput
    update: XOR<animalUpdateWithoutOrderInput, animalUncheckedUpdateWithoutOrderInput>
    create: XOR<animalCreateWithoutOrderInput, animalUncheckedCreateWithoutOrderInput>
  }

  export type animalUpdateWithWhereUniqueWithoutOrderInput = {
    where: animalWhereUniqueInput
    data: XOR<animalUpdateWithoutOrderInput, animalUncheckedUpdateWithoutOrderInput>
  }

  export type animalUpdateManyWithWhereWithoutOrderInput = {
    where: animalScalarWhereInput
    data: XOR<animalUpdateManyMutationInput, animalUncheckedUpdateManyWithoutAnimalsInput>
  }

  export type animalScalarWhereInput = {
    AND?: Enumerable<animalScalarWhereInput>
    OR?: Enumerable<animalScalarWhereInput>
    NOT?: Enumerable<animalScalarWhereInput>
    id?: StringFilter | string
    order_id?: StringFilter | string
    kind?: StringFilter | string
    name?: StringFilter | string
    age?: StringFilter | string
    color?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
  }

  export type userUpsertWithoutOrderInput = {
    update: XOR<userUpdateWithoutOrderInput, userUncheckedUpdateWithoutOrderInput>
    create: XOR<userCreateWithoutOrderInput, userUncheckedCreateWithoutOrderInput>
  }

  export type userUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roomUpsertWithoutOrderInput = {
    update: XOR<roomUpdateWithoutOrderInput, roomUncheckedUpdateWithoutOrderInput>
    create: XOR<roomCreateWithoutOrderInput, roomUncheckedCreateWithoutOrderInput>
  }

  export type roomUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_pet?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: hotelUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type roomUncheckedUpdateWithoutOrderInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_pet?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hotelUpsertWithoutOrderInput = {
    update: XOR<hotelUpdateWithoutOrderInput, hotelUncheckedUpdateWithoutOrderInput>
    create: XOR<hotelCreateWithoutOrderInput, hotelUncheckedCreateWithoutOrderInput>
  }

  export type hotelUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: hotel_imagesUpdateManyWithoutHotelNestedInput
    vendor?: vendorUpdateOneRequiredWithoutHotelNestedInput
    rooms?: roomUpdateManyWithoutHotelNestedInput
  }

  export type hotelUncheckedUpdateWithoutOrderInput = {
    vendor_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: hotel_imagesUncheckedUpdateManyWithoutHotelNestedInput
    rooms?: roomUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type vendorUpsertWithoutOrderInput = {
    update: XOR<vendorUpdateWithoutOrderInput, vendorUncheckedUpdateWithoutOrderInput>
    create: XOR<vendorCreateWithoutOrderInput, vendorUncheckedCreateWithoutOrderInput>
  }

  export type vendorUpdateWithoutOrderInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    saldo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: hotelUpdateOneWithoutVendorNestedInput
  }

  export type vendorUncheckedUpdateWithoutOrderInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    saldo?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: hotelUncheckedUpdateOneWithoutVendorNestedInput
  }

  export type orderCreateWithoutAnimalsInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutOrderInput
    room: roomCreateNestedOneWithoutOrderInput
    hotel: hotelCreateNestedOneWithoutOrderInput
    vendor: vendorCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutAnimalsInput = {
    id?: string
    hotel_id: string
    room_id: string
    user_id: string
    vendor_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderCreateOrConnectWithoutAnimalsInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutAnimalsInput, orderUncheckedCreateWithoutAnimalsInput>
  }

  export type orderUpsertWithoutAnimalsInput = {
    update: XOR<orderUpdateWithoutAnimalsInput, orderUncheckedUpdateWithoutAnimalsInput>
    create: XOR<orderCreateWithoutAnimalsInput, orderUncheckedCreateWithoutAnimalsInput>
  }

  export type orderUpdateWithoutAnimalsInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutOrderNestedInput
    room?: roomUpdateOneRequiredWithoutOrderNestedInput
    hotel?: hotelUpdateOneRequiredWithoutOrderNestedInput
    vendor?: vendorUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutAnimalsInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderCreateManyUserInput = {
    id?: string
    hotel_id: string
    room_id: string
    vendor_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderUpdateWithoutUserInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUpdateManyWithoutOrderNestedInput
    room?: roomUpdateOneRequiredWithoutOrderNestedInput
    hotel?: hotelUpdateOneRequiredWithoutOrderNestedInput
    vendor?: vendorUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUserInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutOrderInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderCreateManyVendorInput = {
    id?: string
    hotel_id: string
    room_id: string
    user_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderUpdateWithoutVendorInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUpdateManyWithoutOrderNestedInput
    user?: userUpdateOneRequiredWithoutOrderNestedInput
    room?: roomUpdateOneRequiredWithoutOrderNestedInput
    hotel?: hotelUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutVendorInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type hotel_imagesCreateManyHotelInput = {
    id?: string
    image: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type roomCreateManyHotelInput = {
    id?: string
    name: string
    image: string
    description: string
    max_pet: number
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderCreateManyHotelInput = {
    id?: string
    room_id: string
    user_id: string
    vendor_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type hotel_imagesUpdateWithoutHotelInput = {
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hotel_imagesUncheckedUpdateWithoutHotelInput = {
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hotel_imagesUncheckedUpdateManyWithoutImagesInput = {
    image?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roomUpdateWithoutHotelInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_pet?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateWithoutHotelInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_pet?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: orderUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomUncheckedUpdateManyWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_pet?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUpdateWithoutHotelInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUpdateManyWithoutOrderNestedInput
    user?: userUpdateOneRequiredWithoutOrderNestedInput
    room?: roomUpdateOneRequiredWithoutOrderNestedInput
    vendor?: vendorUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutHotelInput = {
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyRoomInput = {
    id?: string
    hotel_id: string
    user_id: string
    vendor_id: string
    start_date: Date | string
    end_date: Date | string
    status: number
    notes: string
    amount: number
    expired_at: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type orderUpdateWithoutRoomInput = {
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUpdateManyWithoutOrderNestedInput
    user?: userUpdateOneRequiredWithoutOrderNestedInput
    hotel?: hotelUpdateOneRequiredWithoutOrderNestedInput
    vendor?: vendorUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutRoomInput = {
    hotel_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animals?: animalUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type animalCreateManyOrderInput = {
    id?: string
    kind: string
    name: string
    age: string
    color: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type animalUpdateWithoutOrderInput = {
    kind?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type animalUncheckedUpdateWithoutOrderInput = {
    kind?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type animalUncheckedUpdateManyWithoutAnimalsInput = {
    kind?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}