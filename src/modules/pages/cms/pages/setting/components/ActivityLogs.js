import React, { useEffect } from 'react';
import useSetting from '../core/action';
import { useSelector } from 'react-redux';
import moment from 'moment';

const ActivityLogs = () => {
    const { getActivity } = useSetting();
    const activity = useSelector(state => state.setting.activity);
    const loading = useSelector(state => state.setting.loading);

    useEffect(() => {
        getActivity();
    }, []);

    return (
        <div className="px-4">
            {loading ? (
                <p>Loading...</p>
            ) : activity && activity.length > 0 ? (
                <ul>
                    {activity.map((log, index) => {
                        const formattedDate = moment(log.createdAt).format('MMMM DD, YYYY hh:mm A');
                        return (
                            <li key={index} className="border-b border-gray-200 py-2">
                                <p><strong>ID:</strong> {log.id}</p>
                                <p><strong>Action:</strong> {log.action}</p>
                                <p><strong>Login At:</strong> {formattedDate}</p>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p>No activity logs available</p>
            )}
        </div>
    );
};

export default ActivityLogs;
