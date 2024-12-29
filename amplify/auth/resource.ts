// import { defineAuth } from '@aws-amplify/backend';

// /**
//  * Define and configure your auth resource
//  * @see https://docs.amplify.aws/gen2/build-a-backend/auth
//  */
// export const auth = defineAuth({
//   loginWith: {
//     email: true,
//   },
// });

import { defineFunction } from '@aws-amplify/backend';

export const postConfirmation = defineFunction({
  name: 'post-confirmation',
});