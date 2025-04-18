import { Fragment, useContext } from 'react';
import { Progress, Skeleton } from '@heroui/react';
import { UserDataContext } from '../UserDataContext';

export default function ExpProgressBar() {
    const { userExp } = useContext(UserDataContext);

    if (!userExp) {
        return (
            <div className='w-full flex-grow lg:w-fit'>
                <div className='flex flex-col gap-2'>
                    <Skeleton className='w-[200px] h-[18px] rounded-full' />
                    <Skeleton className='w-full h-[14px] rounded-full' />
                    <Skeleton className='w-[120px] h-[16px] rounded-full' />
                </div>
            </div>
        );
    }

    return (
        <Fragment>
            <div className='w-full flex-grow lg:w-fit'>
                <Fragment>
                    <Progress
                        value={userExp.requiredXP - userExp.xpRemaining}
                        maxValue={userExp.requiredXP}
                        color='primary'
                        formatOptions={{ style: 'percent' }}
                        showValueLabel
                        valueLabel={`Level ${userExp.level}`}
                        label={
                            <p>
                                <span className='font-bold text-blue-400'>{userExp.xpRemaining}</span> XP to next level
                            </p>
                        }
                        classNames={{
                            value: ['font-medium']
                        }}
                    />
                </Fragment>
            </div>
        </Fragment >
    );
}