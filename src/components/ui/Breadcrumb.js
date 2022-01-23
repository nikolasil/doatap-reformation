import React, { useEffect, useState } from 'react';
import { Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';

const BreadcrumbWrapper = () => {
	const [pathArray, setArray] = useState([]);

	useEffect(() => {
		const path = window.location.pathname.split('/').slice(1);
		setArray(path);
	}, []);
	return (
		<Flex mx={'10px'}>
			<Breadcrumb>
				{pathArray.map((item, index) => (
					<BreadcrumbItem key={index} fontSize={'18px'}>
						<BreadcrumbLink href={'/'}>{item[0] + item.slice(1).toLowerCase()}</BreadcrumbLink>
					</BreadcrumbItem>
				))}
			</Breadcrumb>
		</Flex>
	);
};

export default BreadcrumbWrapper;
