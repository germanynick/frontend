export const Table = {
  baseStyle: {
    minWidth: 'full',
    width: 'full',
    horizontal: true,
    borderWidth: '1px',
    borderRadius: '8px',
    borderColor: 'primary.300',
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
    borderBottomWidth: '1px',
    borderColor: 'primary.300',
  },
};

export const TableBody = {
  baseStyle: {
    minWidth: 'full',
    width: 'full',
    height: 'full',
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
