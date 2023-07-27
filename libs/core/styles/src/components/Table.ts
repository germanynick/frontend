export const Table = {
  baseStyle: {
    minWidth: 'full',
    width: 'full',
    horizontal: true,
    borderWidth: '1px',
    borderRadius: '8px',
    borderColor: 'primary.100',
    backgroundColor: '#ffffff',
    _contentContainerStyle: { minWidth: 'full', style: { flexDirection: 'column' } },
  },
};

export const TableHeader = {
  baseStyle: {
    height: '48px',
    minWidth: 'full',
    width: 'full',
    direction: 'row',
    backgroundColor: '#F1FEFF',
  },
};

export const TableBody = {
  baseStyle: {
    minWidth: 'full',
    width: 'full',
    height: 'full',
    minHeight: '300px',
    borderTopWidth: '1px',
    borderColor: 'primary.100',
    scrollEventThrottle: 400,
    _contentContainerStyle: { minWidth: 'full', width: 'full', flexDirection: 'column' },
  },
};

export const TableHeaderCell = {
  baseStyle: {
    paddingX: '8px',
    flexBasis: 0,
    alignItems: 'flex-start',
    _text: { color: 'primary.600', fontSize: 'md', fontWeight: 'semibold' },
  },
};

export const TableRow = {
  baseStyle: {
    minWidth: 'full',
    width: 'full',
    flexDirection: 'row',
    height: '48px',
    _hover: {
      backgroundColor: '#F8F8F8',
    },
  },
};

export const TableRowCell = {
  baseStyle: {
    paddingX: '8px',
    flexBasis: 0,
    alignItems: 'flex-start',
    _text: { color: '#333335', fontSize: 'md', fontWeight: 'normal', numberOfLines: 1 },
  },
};

export const TableLoading = {
  baseStyle: {
    top: 0,
    left: '1/2',
    position: 'absolute',
    height: 'full',
    space: 2,
  },
};

export const TableEmpty = {
  baseStyle: {
    top: 0,
    left: '1/2',
    position: 'absolute',
    height: 'full',
    space: 2,
  },
};
