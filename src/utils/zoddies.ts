import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  username: z.string().max(25),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>

const maybeUser = {
  username: 'Harry',
} as unknown

// Will try to validate maybe user and will throw an error
const user = UserSchema.parse(maybeUser)


// Will try to validate and return a result object
const userResult = UserSchema.safeParse(maybeUser)


if (userResult.success) {
  userResult.data
  // userResult.error
} else {
  userResult.error
  // userResult.data
}

user.id

function getData() {
  return undefined as unknown
}

const data = getData()

const user2 = UserSchema.parse(data)

user2.id

