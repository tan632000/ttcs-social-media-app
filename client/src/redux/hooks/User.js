import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import userActions from "../actions/User";

export const useUser = () => {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const actionUser = useMemo( () => 
        bindActionCreators(userActions, dispatch)
    ,[dispatch]);

    return useMemo(() => ({
        user, actionUser
    })
    , [user, actionUser])
}