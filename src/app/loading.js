import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className="flex flex-col items-center gap-2 my-50">
            <Spinner className='size-20' size='xl' color="accent" />
            <span className="text-xs text-muted">Loading.......</span>
        </div>
    );
};

export default loading;