const pqIcon = (paths, vb = '0 0 24 24') => ({ size = 18, stroke = 1.6, ...rest }) => (
  <svg width={size} height={size} viewBox={vb} fill="none" stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>{paths}</svg>
);

export const IFood = pqIcon(<g><path d="M7 3v8a3 3 0 0 0 3 3v7"/><path d="M4 3v5"/><path d="M10 3v5"/><path d="M7 8h0"/><path d="M17 3c-2 0-3 2-3 5s1 5 3 5v8"/></g>);
export const IMarket = pqIcon(<g><path d="M3 6h2l2 11h12l2-8H7"/><circle cx="10" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/></g>);
export const IHome = pqIcon(<g><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/></g>);
export const IFun = pqIcon(<g><path d="M4 6h16v12H4z"/><path d="M8 6v12M16 6v12"/><circle cx="6" cy="9" r=".8"/><circle cx="6" cy="12" r=".8"/><circle cx="6" cy="15" r=".8"/><circle cx="18" cy="9" r=".8"/><circle cx="18" cy="12" r=".8"/><circle cx="18" cy="15" r=".8"/></g>);
export const IEdu = pqIcon(<g><path d="M3 5h14a3 3 0 0 1 3 3v12H6a3 3 0 0 1-3-3z"/><path d="M3 5v12a3 3 0 0 1 3-3h14"/></g>);
export const ISubs = pqIcon(<g><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M7 15h3"/></g>);
export const IShop = pqIcon(<g><path d="M5 8h14l-1 12H6z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/></g>);
export const IPets = pqIcon(<g><circle cx="7" cy="9" r="2"/><circle cx="17" cy="9" r="2"/><circle cx="5" cy="14" r="1.8"/><circle cx="19" cy="14" r="1.8"/><path d="M12 13c-3 0-5 3-5 5a2 2 0 0 0 2 2c1 0 1.5-.6 3-.6s2 .6 3 .6a2 2 0 0 0 2-2c0-2-2-5-5-5z"/></g>);
export const IInvest = pqIcon(<g><path d="M3 17l5-6 4 4 8-9"/><path d="M14 6h6v6"/></g>);
export const IPlus = pqIcon(<g><path d="M12 5v14M5 12h14"/></g>);
export const IBolt = pqIcon(<g><path d="M13 3L4 14h6l-1 7 9-11h-6z"/></g>);
export const ITrophy = pqIcon(<g><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M5 5H3v3a3 3 0 0 0 3 3M19 5h2v3a3 3 0 0 1-3 3"/><path d="M9 13v3h6v-3M7 20h10"/></g>);
export const ITarget = pqIcon(<g><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></g>);
export const IFlame = pqIcon(<g><path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/></g>);
export const IChevR = pqIcon(<g><path d="M9 6l6 6-6 6"/></g>);
export const IChevD = pqIcon(<g><path d="M6 9l6 6 6-6"/></g>);
export const ISearch = pqIcon(<g><circle cx="11" cy="11" r="7"/><path d="M16 16l4 4"/></g>);
export const IBell = pqIcon(<g><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/></g>);
export const IRepeat = pqIcon(<g><path d="M4 8l3-3 3 3"/><path d="M7 5v6a4 4 0 0 0 4 4h6"/><path d="M20 16l-3 3-3-3"/><path d="M17 19v-6a4 4 0 0 0-4-4H7"/></g>);
export const ICard = pqIcon(<g><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></g>);
export const IWallet = pqIcon(<g><path d="M4 7v11a2 2 0 0 0 2 2h14V9H6a2 2 0 0 1-2-2zm0 0a2 2 0 0 1 2-2h12v4"/><circle cx="17" cy="14.5" r="1.2" fill="currentColor"/></g>);
export const IPie = pqIcon(<g><path d="M12 3v9l8 4a9 9 0 1 1-8-13z"/></g>);
export const ISparkle = pqIcon(<g><path d="M12 4l1.5 5L19 10.5 13.5 12 12 17l-1.5-5L5 10.5 10.5 9z"/></g>);
export const ICheck = pqIcon(<g><path d="M5 12l5 5L20 7"/></g>);
export const ILock = pqIcon(<g><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></g>);
export const ISun = pqIcon(<g><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></g>);
export const IMoon = pqIcon(<g><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></g>);
