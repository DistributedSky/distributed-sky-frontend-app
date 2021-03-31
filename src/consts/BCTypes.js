const BCTypes = {
    'AccountRole': 'u8',
    'AccountManager': 'AccountId',
    'Address': 'AccountId',
    'LookupSource': 'AccountId',
    'Moment': 'u64',
    'AccountOf': {
        'roles': 'AccountRole',
        'create_date': 'u64',
        'managed_by': 'AccountManager',
        'metadata_ipfs_hash': 'MetaIPFS',
    },
    'SerialNumber': 'Vec<u8>',
    'MetaIPFS': 'Vec<u8>',
    'UAVOf': {
        'uav_id': 'SerialNumber',
        'metadata_ipfs_hash': 'MetaIPFS',
        'managed_by': 'AccountId',
    },
};

export default BCTypes;
