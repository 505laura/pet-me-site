const withoutDatabaseData = (obj) => {
    const data = {...obj};
    delete data.createdAt;
    delete data.deletedAt;
    delete data.id;
    delete data.updatedAt;
    return data;
};

module.exports.withoutDatabaseData = withoutDatabaseData;