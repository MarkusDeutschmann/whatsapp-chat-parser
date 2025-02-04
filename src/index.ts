import { makeArrayOfMessages, parseMessages } from './parser';
import { Message, ParseStringOptions } from './types';

export { Message };

/**
 * Parses a string containing a WhatsApp chat log.
 *
 * Returns a promise that will contain the parsed messages.
 *
 * @since 1.2.0
 */
export function parseString(
  string: string,
  options: ParseStringOptions = { parseAttachments: false },
): Promise<Message[]> {
  return Promise.resolve(string)
    .then(data => data.split(/(?:\r\n|\r|\n)/))
    .then(makeArrayOfMessages)
    .then(messages => parseMessages(messages, options));
}
