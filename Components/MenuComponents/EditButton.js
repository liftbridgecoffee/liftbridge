import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiSave3Fill } from "react-icons/ri";
import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

const EditButton = () => {
	const [editing, setEditing] = useState(false);

	const editToggle = () => {
		setEditing(!editing);
	};

	return (
		<div className={`EditButton${editing}`}>
			{editing ? (
				<>
					<span onClick={() => editToggle()}>
						<RiSave3Fill />
					</span>
					<span onClick={() => editToggle()}>
						<MdOutlineDeleteForever />
					</span>
				</>
			) : (
				<>
					<span onClick={() => editToggle()}>
						<FiEdit />
					</span>
				</>
			)}
		</div>
	);
};

export default EditButton;
