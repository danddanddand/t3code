import { useAtomValue } from "@effect/atom-react";
import {
  DEFAULT_PASTED_TEXT_ATTACHMENT_THRESHOLD,
  type PastedTextAttachmentThreshold,
} from "@t3tools/contracts";
import { AsyncResult } from "effect/reactivity";

import { mobilePreferencesAtom } from "../state/preferences";

/** Paste size at which the composer folds clipboard text into a text-file attachment. */
export function usePastedTextAttachmentThreshold(): PastedTextAttachmentThreshold {
  const preferences = useAtomValue(mobilePreferencesAtom);
  return AsyncResult.isSuccess(preferences)
    ? (preferences.value.pastedTextAttachmentThreshold ?? DEFAULT_PASTED_TEXT_ATTACHMENT_THRESHOLD)
    : DEFAULT_PASTED_TEXT_ATTACHMENT_THRESHOLD;
}
