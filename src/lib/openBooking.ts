/** Deep link / history sync for the booking modal (matches legacy `#book-call`). */
export const BOOKING_HASH = "book-call";

const EVENT = "automagixx:open-booking";

export function requestOpenBooking() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(EVENT));
  const path = `${window.location.pathname}${window.location.search}`;
  if (window.location.hash !== `#${BOOKING_HASH}`) {
    window.history.replaceState(null, "", `${path}#${BOOKING_HASH}`);
  }
}

export function subscribeOpenBooking(handler: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

export function bookingHashIsOpen() {
  if (typeof window === "undefined") return false;
  return window.location.hash === `#${BOOKING_HASH}`;
}

export function clearBookingHash() {
  if (typeof window === "undefined") return;
  if (window.location.hash === `#${BOOKING_HASH}`) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
}
