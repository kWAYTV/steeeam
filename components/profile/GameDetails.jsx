import { Fragment, useContext } from 'react';
import moment from 'moment';
import { Skeleton } from '@heroui/react';
import { minutesToHoursCompact } from '@/utils/utils';
import { MdAvTimer } from 'react-icons/md';
import { IoGameController } from 'react-icons/io5';
import { FaMoneyBillWave } from 'react-icons/fa';
import { UserDataContext } from '../UserDataContext';

export default function GameDetails({ gameName, gameId, minutes, lastPlayedTimestamp }) {
    const { gameDetails } = useContext(UserDataContext);

    if (!gameDetails) {
        return (
            <Fragment>
                <div className='flex justify-between flex-col w-full py-1'>
                    <Skeleton className='rounded-lg w-[200px] h-[16px]' />
                    <div className='flex flex-col gap-1'>
                        <Skeleton className='rounded-lg w-1/2 h-[16px]' />
                        <Skeleton className='rounded-lg w-1/2 h-[16px]' />
                    </div>
                </div>
            </Fragment>
        );
    }

    const gameDetail = gameDetails[gameId] || {};

    return (
        <Fragment>
            <div className='flex flex-col justify-between text-black dark:text-white w-full overflow-hidden py-1'>
                <p className='font-bold truncate'>
                    {gameName}
                </p>

                <div className='hidden gap-4 py-1 flex-wrap mt-5 md:mt-0 md:gap-10 md:flex'>
                    <div className='flex flex-col text-sm'>
                        <div className='flex items-center gap-1'>
                            <MdAvTimer className='text-yellow-400' fontSize={20} />
                            <p className='text-md font-medium uppercase text-dull'>Total Platime</p>
                        </div>
                        {parseInt(minutesToHoursCompact(minutes)) > 1 ? (
                            <p>{minutesToHoursCompact(minutes)} hours</p>
                        ) : parseInt(minutesToHoursCompact(minutes)) === 0 ? (
                            <p>Never played</p>
                        ) : (
                            <p>{minutesToHoursCompact(minutes)} hour</p>
                        )}
                    </div>

                    <div className='flex flex-col text-sm'>
                        <div className='flex items-center gap-1'>
                            <IoGameController className='text-blue-400' fontSize={20} />
                            <p className='text-md font-medium uppercase text-dull'>Last Played</p>
                        </div>
                        {lastPlayedTimestamp > 0 ? (
                            <p>{moment.unix(lastPlayedTimestamp).format('MMM D, YYYY')}</p>
                        ) : (
                            <p>-</p>
                        )}
                    </div>

                    <div className='flex flex-col text-sm'>
                        <div className='flex items-center gap-1'>
                            <FaMoneyBillWave className='text-green-400' fontSize={20} />
                            <p className='text-md font-medium uppercase text-dull'>Current Price</p>
                        </div>
                        {gameDetail.price_overview ? (
                            <p>{gameDetail.price_overview.final_formatted}</p>
                        ) : (
                            <p>Free</p>
                        )}
                    </div>
                </div>

                <div className='grid grid-cols-1 w-full mt-2 py-1 flex-wrap sm:gap-4 sm:grid-cols-3 md:hidden'>
                    <div className='flex items-center justify-start gap-1 text-sm'>
                        <MdAvTimer className='text-yellow-400' fontSize={20} />
                        <p className='truncate'>
                            {minutesToHoursCompact(minutes)} hours
                        </p>
                    </div>

                    <div className='flex items-center justify-start gap-1 text-sm'>
                        <IoGameController className='text-blue-400' fontSize={20} />
                        {lastPlayedTimestamp > 0 ? (
                            <p className='truncate'>
                                {moment.unix(lastPlayedTimestamp).format('MMM D, YYYY')}
                            </p>
                        ) : (
                            <p>-</p>
                        )}
                    </div>

                    <div className='flex items-center justify-start flex-grow gap-1 text-sm'>
                        <FaMoneyBillWave className='text-green-400' fontSize={20} />
                        {gameDetail.price_overview ? (
                            <p className='truncate'>
                                {gameDetail.price_overview.final_formatted}
                            </p>
                        ) : (
                            <p>Free</p>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}